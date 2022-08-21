const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
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
        });
        if (user && await bcrypt.compare(password, user.password)) {
          req.session.user = { id: user.id, name: user.name };
          return res.json({ id: user.id, name: user.name });
        }
        return res.sendStatus(401);
      } catch (err) {
        console.log(err);
        return res.sendStatus(500);
      }
    }
    return res.sendStatus(200);
  });

// router.post('/signup', upload.single('avatar'), async (req, res) => {
//   await Product.create({
// name: req.body.name, category: req.body.category, img: req.file?.path.replace('public', ''), user_id: req.session.userId,
//   });
//   const products = await Product.findAll({
//     include: User,
//   });
//   res.json(products);
// });

router.post('/signup', upload.single('avatar'), async (req, res) => {
  // const {
  //   name, email, img, password
  // } = req.body;
  console.log('!fjeo---------->WWWWWWWWWWWWWWW', req.body);
  if (req.body.name && req.body.email && req.body.password) {
    const pass = await bcrypt.hash(req.body.password, 10);
    try {
      const newUser = await User.create({
        name: req.body.name, email: req.body.email, img: req.file?.path.replace('public', '') || null, password: pass
      });
      req.session.user = { name: newUser.name, id: newUser.id };
      return res.json({ name: newUser.name, id: newUser.id });
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
