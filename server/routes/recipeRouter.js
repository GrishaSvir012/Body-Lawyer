const router = require('express').Router();
const { Op } = require('sequelize');
const { Recipes } = require('../db/models');

router.post('/', async (req, res) => {
  const rec = req.body.value.split(' ');
  // .map((el) => `%${el}%`);
  console.log('req.body.value------->>>>>>', rec);
  let recipe;
  console.log(typeof rec.length);
  switch (rec.length) {
    case 1:
      recipe = await Recipes.findAll({
        where: {
          ingridients: { [Op.and]: [{ [Op.iLike]: `%${rec[0]}%` }] }
        }
      });
      res.json(recipe);
      console.log(recipe);
      break;
    case 2:
      recipe = await Recipes.findAll({
        where: {
          ingridients: {
            [Op.and]: [{ [Op.iLike]: `%${rec[0]}%` }, { [Op.iLike]: `%${rec[1]}%` }]
          }
        }
      });
      res.json(recipe);
      console.log(recipe);
      break;
    case 3:
      recipe = await Recipes.findAll({
        where: {
          ingridients: {
            [Op.and]: [{ [Op.iLike]: `%${rec[0]}%` }, { [Op.iLike]: `%${rec[1]}%` }, { [Op.iLike]: `%${rec[2]}%` }]
          }
        }
      });
      res.json(recipe);
      console.log(recipe);
      break;
    default:
      console.log('O net');
      break;
  }
});

module.exports = router;

// const recipe = await Recipes.findAll(
//   {
//     where: {
//       ingridients: {
//         [Op.and]: [{ [Op.iLike]: rec[0] }, { [Op.iLike]: rec[1] }, { [Op.iLike]: rec[2] }]
//       } || {
//         [Op.and]: [{ [Op.iLike]: rec[0] }, { [Op.iLike]: rec[1] }]
//       } || {
//         [Op.and]: [{ [Op.iLike]: rec[0] }]
//       }
//     }
//   }
// );
//   [Op.and]: req.body.value.split(' ').map((el) => ({ [Op.iLike]: el })),
//   [Op.iLike]: rec[2],
//   [Op.iLike]: rec[3],
//   [Op.iLike]: rec[4]
// //   [Op.iLike]: { [Op.and]: req.body.value.split(' ').map((el) => `%${el}%`) }
//   [Op.iLike]: req.body.value.split(' ').map((el) => `%${el}%`)
//   [Op.iLike]: `%${req.body.value.split(' ')}%`
//   [Op.iLike]: rec[0],
//   [Op.iLike]: rec[1]
