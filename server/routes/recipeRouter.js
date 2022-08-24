const router = require('express').Router();
const { Op } = require('sequelize');
const { Recipes } = require('../db/models');

router.post('/', async (req, res) => {
  const rec = req.body.value.split(' ').map((el) => `%${el}%`);
  console.log('req.body.value------->>>>>>', rec);
  const recipe = await Recipes.findAll(
    {
      where: {
        ingridients: {
        //   [Op.iLike]: `%${req.body.value.split(' ')}%`
        //   [Op.iLike]: rec[0],
        //   [Op.iLike]: rec[1]
          [Op.and]: [{ [Op.iLike]: rec[0] }, { [Op.iLike]: rec[1] }]
        //   [Op.and]: req.body.value.split(' ').map((el) => ({ [Op.iLike]: el })),
        //   [Op.iLike]: rec[2],
        //   [Op.iLike]: rec[3],
        //   [Op.iLike]: rec[4]
        // //   [Op.iLike]: { [Op.and]: req.body.value.split(' ').map((el) => `%${el}%`) }
        //   [Op.iLike]: req.body.value.split(' ').map((el) => `%${el}%`)
        }
      }
    }
  );
  res.json(recipe);
  console.log(recipe);
});

module.exports = router;
