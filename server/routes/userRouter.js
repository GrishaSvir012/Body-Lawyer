const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, User_body } = require('../db/models');
const upload = require('../middlewares/multer');

router.route('/')
  .get(async (req, res) => {
    res.json({});
  });

router.route('/signin')

  .post(async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      try {
        const user = await User.findOne({
          where: {
            email,
          },
          include: [
            {
              model: User_body,
            }
          ]
        });
        if (user && await bcrypt.compare(password, user.password)) {
          console.log(JSON.parse(JSON.stringify(user)));
          req.session.user = {
            id: user.id,
            name: user.name,
            img: user.img,
            body: {
              gender: user.User_body.gender,
              weigth: user.User_body.weigth,
              age: user.User_body.age,
              height: user.User_body.height,
              mission: user.User_body.mission,
              activity: user.User_body.activity
            }
          };
          // req.session.user.body = {
          //   gender: user.gender,
          //   weigth: user.weigth,
          //   age: user.age,
          //   height: user.height,
          //   mission: user.mission,
          //   activity: user.activity
          // };
          return res.json({ id: user.id, name: user.name, body: req.session.user.body });
        }
        return res.sendStatus(401);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    }
    return res.sendStatus(200);
  });

router.post('/signup', upload.single('avatar'), async (req, res) => {
  if (req.body.name && req.body.email && req.body.password) {
    const pass = await bcrypt.hash(req.body.password, 10);
    try {
      const newUser = await User.create({
        name: req.body.name, email: req.body.email, img: req.file?.path.replace('public', '') || null, password: pass
      });
      req.session.user = { name: newUser.name, id: newUser.id, img: newUser.img };
      return res.json({
        name: newUser.name, id: newUser.id, body: req.session.user.body, img: newUser.img
      });
    } catch (err) {
      console.log(err);
      return res.sendStatus(401);
    }
  }
  return res.sendStatus(401);
});

router.route('/check')
  .post((req, res) => {
    if (req.session.user) {
      return res.json(req.session.user);
    }
    return res.sendStatus(401);
  });

router.route('/logout')
  .get((req, res) => {
    res.app.locals.ws.delete(req.session.user.id);
    for (const [, wsClient] of res.app.locals.ws) {
      wsClient.ws.send(JSON.stringify(
        { type: 'ADD_CHAT_USER', payload: Array.from(res.app.locals.ws.values()).map((el) => el.user) },
      ));
    }
    req.session.destroy();
    res.clearCookie('sid').sendStatus(200);
  });

module.exports = router;
