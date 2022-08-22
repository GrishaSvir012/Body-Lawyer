const router = require('express').Router();
const { Daily_food_by_type } = require('../db/models');

router.get('/', async (req, res) => {
  const {
    date_start, date_end, typeOfMeal, user_id
  } = req.body;

  const statistic = await Daily_food_by_type.findAll(
    {
      where: {
        // user_id: req.session.user_id
        user_id
      }
    }
  );
  res.json(statistic);
});

module.exports = router;
