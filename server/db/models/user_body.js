const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User_body extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  User_body.init({
    gender: DataTypes.STRING,
    weigth: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    height: DataTypes.INTEGER,
    mission: DataTypes.STRING,
    activity: DataTypes.FLOAT,
    calories_needed: DataTypes.INTEGER,
    protein_needed: DataTypes.INTEGER,
    fats_needed: DataTypes.INTEGER,
    carbohidrates_needed: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User_body',
  });
  return User_body;
};
