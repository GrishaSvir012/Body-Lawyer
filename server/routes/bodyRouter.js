const router = require('express').Router();
const { User_body } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    gender, weigth, age, height, mission, activity
  } = req.body;
  let calories;
  if (gender === 'male') {
    calories = Math.round((10 * weigth + 6.25 * height - 5 * age + 5) * activity);
  } else {
    calories = Math.round((10 * weigth + 6.25 * height - 5 * age - 161) * activity);
  }

  const bodyData = await User_body.create({
    // user_id: req.session.user_id, // проверить запись на req.session
    gender,
    weigth,
    age,
    height,
    mission,
    activity,
    calories_needed: calories
  });
  res.json(bodyData);
});// ручка запись в базу данных о состоянии тела и рассчет нормы калорий

module.exports = router;
