const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/registration');
router.post('/login');
router.get('/auth');// нужен для проверки авторизован юзер или нет

module.exports = router;

// router.route('/')
//   .get(async (req, res) => {
//     res.json({});
//   });
