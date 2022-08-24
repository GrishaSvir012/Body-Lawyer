const router = require('express').Router();
const { Op } = require('sequelize');
const { Daily_food_by_type, Type_of_meal, sequelize } = require('../db/models');

router.get('/', async (req, res) => {
  // const {
  //   date_start, date_end, typeOfMeal, user_id
  // } = req.body;

  let { start, end } = req.query;
  start = new Date(start);
  end = new Date(end);

  const statistic = await Daily_food_by_type.findAll(
    {
      where: {
        user_id: req.session.user.id,
        [Op.and]: [{ [Op.gte]: start }, { [Op.lte]: end }]
      },
      attributes: [
        'date',
        [sequelize.fn('sum', sequelize.col('sum_kkal')), 'total_kkal'],
        [sequelize.fn('sum', sequelize.col('sum_protein')), 'total_protein'],
        [sequelize.fn('sum', sequelize.col('sum_fats')), 'total_fats'],
        [sequelize.fn('sum', sequelize.col('sum_carbohidrates')), '_carbohidrates'],

      ],
      group: ['date'],
      include: [
        {
          model: Type_of_meal,
          attributes: {
            exclude: ['id', 'createdAt', 'updatedAt']
          }
        }
      ]
    }
  );
  res.json(statistic);
});

module.exports = router;
