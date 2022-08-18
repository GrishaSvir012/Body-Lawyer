const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type_of_meal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Daily_food_by_type }) {
      // define association here
      this.hasMany(Daily_food_by_type, { foreignKey: 'type_of_meal_id' });
    }
  }
  Type_of_meal.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Type_of_meal',
  });
  return Type_of_meal;
};
