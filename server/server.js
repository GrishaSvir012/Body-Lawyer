require('dotenv').config();
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');
// ws part
const http = require('http');
const wss = require('./webSocket');

const PORT = process.env.PORT || 3001;

const app = express();
app.locals.ws = new Map();

const userRouter = require('./routes/userRouter');
const bodyRouter = require('./routes/bodyRouter');
const insetFoodRouter = require('./routes/insertFoodRouter');
const statisticRouter = require('./routes/statisticRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  credentials: true,
  origin: true,
}));

const sessionParser = session({
  name: 'sid',
  store: new FileStore({}),
  secret: 'jdkjelkwjelk',
  saveUninitialized: false,
  resave: false,
  cookie: {
    expires: 24 * 60 * 60e3,
    httpOnly: true,
  },
});

app.use(sessionParser);

app.use('/api/user', userRouter);
app.use('/api/user/body', bodyRouter);
app.use('/insertyourfood', insetFoodRouter);
app.use('/statistic', statisticRouter);
const server = http.createServer(app);

server.on('upgrade', (request, socket, head) => {
  console.log('Parsing session from request...', app.locals.ws);

  sessionParser(request, {}, () => {
    if (!request.session.user) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    console.log('Session is parsed!');

    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request, app.locals.ws);
    });
  });
});

server.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
