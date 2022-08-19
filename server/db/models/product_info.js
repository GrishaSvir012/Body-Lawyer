const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Daily_food_by_type }) {
      // define association here
      this.hasMany(Daily_food_by_type, { foreignKey: 'product_info_id' });
    }
  }
  Product_info.init({
    food_name: DataTypes.STRING,
    calories: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    fats: DataTypes.FLOAT,
    carbohidrates: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Product_info',
  });
  return Product_info;
};
