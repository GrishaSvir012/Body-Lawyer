const router = require('express').Router();
const { Op } = require('sequelize');
const { Daily_food_by_type, Type_of_meal, sequelize } = require('../db/models');

router.get('/', async (req, res) => {
  console.log('--------------------------------------');

  let { start, end } = req.query;
  console.log(start, end);
  start = new Date(start);
  end = new Date(end);
  console.log(start, end);

  const statistic = await Daily_food_by_type.findAll(
    {
      where: {
        // user_id: req.session?.user?.id ?? 1,
        user_id: req.session.user.id,
        [Op.and]: [{ date: { [Op.gte]: start } }, { date: { [Op.lte]: end } }]
      },
      attributes: [
        'date',
        [sequelize.fn('sum', sequelize.col('sum_kkal')), 'total_kkal'],
        [sequelize.fn('sum', sequelize.col('sum_protein')), 'total_protein'],
        [sequelize.fn('sum', sequelize.col('sum_fats')), 'total_fats'],
        [sequelize.fn('sum', sequelize.col('sum_carbohidrates')), 'total_carbohidrates'],

      ],
      // include: [
      //   {
      //     model: Type_of_meal,
      //     attributes: {
      //       exclude: ['id', 'createdAt', 'updatedAt']
      //     }
      //   }
      // ],
      group: ['date'],
      order: [['date', 'ASC']]
    }
  );
  console.log(statistic, '---------------SSSSSSSTAT');
  res.json(statistic);
});

module.exports = router;
// module.exports = {
//   up(queryInterface, Sequelize) {
//     return queryInterface.addColumn(
//       'pages',
//       'group',
//       Sequelize.JSONB
//     );
//   },
//   down(queryInterface, Sequelize) {
//     return queryInterface.removeColumn('pages', 'group');
//   }
// };
