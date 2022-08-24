const router = require('express').Router();
const { Op } = require('sequelize');

const { User_body, Product_info, Daily_food_by_type } = require('../db/models');

router.post('/', async (req, res) => {
  console.log(req.body, 'req.body in body_calck!');
  // date,
  const sum_kkal = req.body.calories;
  const sum_protein = req.body.protein;
  const sum_fats = req.body.fats;
  const sum_carbohidrates = req.body.carbohidrates;
  const product_weight = +req.body.gr;
  const { type_of_meal_id } = req.body;
  const product_info_id = req.body.id;
  const { date } = req.body;

  const sum_kkal_to_db = Math.round(sum_kkal * (+product_weight / 100));
  const sum_protein_to_db = Math.round(sum_protein * (+product_weight / 100));
  const sum_fats_to_db = Math.round(sum_fats * (+product_weight / 100));
  const sum_carbohidrates_to_db = Math.round(+sum_carbohidrates * (+product_weight / 100));

  const dailyFoodData = await Daily_food_by_type.create({
    date,
    sum_kkal: sum_kkal_to_db,
    sum_protein: sum_protein_to_db,
    sum_fats: sum_fats_to_db,
    sum_carbohidrates: sum_carbohidrates_to_db,
    product_weight,
    type_of_meal_id,
    product_info_id,
    user_id: req.session.user.id
  });
  console.log(req.session, 'req.session!!!!');
  console.log(dailyFoodData, 'dailyFoodData!!!!');
  res.json(dailyFoodData);
});// ручка запись в базу данных, записывает съеденную еду и подсчитывает значения

router.post('/input', async (req, res) => {
  const { food_name } = req.body;
  const products = await Product_info.findAll(
    {
      where: {
        food_name: {
          [Op.iLike]: `%${food_name}%`
        },
      },
    }
  );

  res.json(products);
});

module.exports = router;
