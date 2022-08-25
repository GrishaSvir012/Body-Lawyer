const router = require('express').Router();
const { User_body, User } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    gender, weigth, age, height, mission, activity
  } = req.body;
  req.session.user.body = {
    gender, weigth, age, height, mission, activity
  };

  let fats;
  let carbohidrates;
  let protein;

  if (mission === 'slim') {
    protein = Math.round(weigth * 1.25);
    fats = Math.round(weigth * 1.1);
    carbohidrates = Math.round(weigth * 3.5);
  } else if (mission === 'save') {
    protein = Math.round(weigth * 1.35);
    fats = Math.round(weigth * 1.35);
    carbohidrates = Math.round(weigth * 4.5);
  } else if (mission === 'gain') {
    protein = Math.round(weigth * 1.5);
    fats = Math.round(weigth * 1.75);
    carbohidrates = Math.round(weigth * 5.5);
  }

  let calories;
  if (req.body.gender === 'male') {
    calories = Math.round(
      (10 * req.body.weigth + 6.25 * req.body.height - 5 * req.body.age + 5) * req.body.activity
    );
  } else {
    calories = Math.round(
      (10 * req.body.weigth + 6.25 * req.body.height - 5 * req.body.age - 161) * req.body.activity
    );
  }

  const bodyData = await User_body.create({
    user_id: req.session.user.id, // проверить запись на req.session
    gender,
    weigth,
    age,
    height,
    mission,
    activity,
    calories_needed: calories,
    protein_needed: protein,
    fats_needed: fats,
    carbohidrates_needed: carbohidrates,

  });
  console.log('bodyData------>>', bodyData);
  res.json(bodyData);
});// ручка запись в базу данных о состоянии тела и рассчет нормы калорий

router.get('/userStat', async (req, res) => {
  // eslint-disable-next-line prefer-const
  try {
    const info = await User_body.findAll(
      {
        where: {
          user_id: req.session.user.id
        },
        include: [
          {
            model: User
          }
        ]
      }
    );
    console.log(info, 'info for User_bodies');
    res.json(info);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
