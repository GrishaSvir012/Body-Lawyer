const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      Role, Daily_food_by_type, User_body, Message
    }) {
      // define association here
      this.belongsTo(Role, { foreignKey: 'role_id' });
      this.hasMany(Daily_food_by_type, { foreignKey: 'user_id' });
      this.hasOne(User_body, { foreignKey: 'user_id' });
      this.hasMany(Message, { foreignKey: 'user_id' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    img: DataTypes.TEXT,
    password: DataTypes.STRING,
    role_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
