const router = require('express').Router();
const { User_body } = require('../db/models');

router.post('/', async (req, res) => {
  console.log(req.body);
  // const {
  //   gender, weigth, age, height, mission, activity
  // } = req.body;
  let calories;
  if (req.body.gender === 'male') {
    calories = Math.round((10 * req.body.weigth + 6.25 * req.body.height - 5 * req.body.age + 5) * req.body.activity);
  } else {
    calories = Math.round((10 * req.body.weigth + 6.25 * req.body.height - 5 * req.body.age - 161) * req.body.activity);
  }

  const bodyData = await User_body.create({
    user_id: req.session.user.id, // проверить запись на req.session
    gender: req.body.gender,
    weigth: req.body.weigth,
    age: req.body.age,
    height: req.body.height,
    mission: req.body.mission,
    activity: req.body.activity,
    calories_needed: calories
  });
  console.log('bodyData------>>', bodyData);
  res.json(bodyData);
});// ручка запись в базу данных о состоянии тела и рассчет нормы калорий

module.exports = router;
