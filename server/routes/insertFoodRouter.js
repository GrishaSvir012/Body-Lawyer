const router = require('express').Router();
const { Op } = require('sequelize');

const { User_body, Product_info, Daily_food_by_type } = require('../db/models');

router.post('/', async (req, res) => {
  const {
    date, sum_kkal,
    sum_protein, sum_fats,
    sum_carbohidrates, product_weight,
    type_of_meal_id, product_info_id,
    user_id
  } = req.body;
  const sum_kkal_to_db = Math.round(sum_kkal * (product_weight / 100));
  const sum_protein_to_db = Math.round(sum_protein * (product_weight / 100));
  const sum_fats_to_db = Math.round(sum_fats * (product_weight / 100));
  const sum_carbohidrates_to_db = Math.round(+sum_carbohidrates * (product_weight / 100));

  const dailyFoodData = await Daily_food_by_type.create({
    // user_id: req.session.user_id, // проверить запись на req.session
    date,
    sum_kkal: sum_kkal_to_db,
    sum_protein: sum_protein_to_db,
    sum_fats: sum_fats_to_db,
    sum_carbohidrates: sum_carbohidrates_to_db,
    product_weight,
    type_of_meal_id,
    product_info_id,
    user_id
  });
  res.json(dailyFoodData);
});// ручка запись в базу данных, записывает съеденную еду и подсчитывает значения

router.post('/input', async (req, res) => {
  const { input } = req.body;

  const products = await Product_info.findAll(
    // console.log(products.food_name)
    //   products.map((el) => el.food_name.toLowerCase())
    {
      where: {
        food_name: {
          [Op.iLike]: `%${input}%`
          // [Op.substring]: `%${input}`

        },
      },
    }
  );

  res.json(products);
});

module.exports = router;

// .toLowerCase()
// setTimeout(() => {
//   res.json(products);
// }, 1000);
