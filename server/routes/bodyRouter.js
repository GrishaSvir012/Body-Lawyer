const router = require('express').Router();
const { User_body } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    gender, weight, age, mission, activity
  } = req.body;
  const bodyData = await User_body.create({
    gender, weight, age, mission, activity,
     calories_needed: 
  });
});// ручка запись в базу данных о состоянии тела и рассчет нормы калорий

module.exports = router;
