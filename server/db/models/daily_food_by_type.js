const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Daily_food_by_type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Product_info, Type_of_meal }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Product_info, { foreignKey: 'product_info_id' });
      this.belongsTo(Type_of_meal, { foreignKey: 'type_of_meal_id' });
    }
  }
  Daily_food_by_type.init({
    date: DataTypes.STRING,
    sum_kkal: DataTypes.INTEGER,
    sum_protein: DataTypes.INTEGER,
    sum_fats: DataTypes.INTEGER,
    sum_carbohidrates: DataTypes.INTEGER,
    product_weight: DataTypes.INTEGER,
    type_of_meal_id: DataTypes.INTEGER,
    product_info_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Daily_food_by_type',
  });
  return Daily_food_by_type;
};
