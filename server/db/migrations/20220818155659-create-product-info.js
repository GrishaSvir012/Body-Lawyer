'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Product_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      food_name: {
        type: Sequelize.STRING
      },
      calories: {
        type: Sequelize.INTEGER
      },
      protein: {
        type: Sequelize.INTEGER
      },
      fats: {
        type: Sequelize.INTEGER
      },
      carbohidrates: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Product_infos');
  }
};