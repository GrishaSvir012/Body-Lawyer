'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Daily_food_by_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      sum_kkal: {
        type: Sequelize.INTEGER
      },
      sum_protein: {
        type: Sequelize.INTEGER
      },
      sum_fats: {
        type: Sequelize.INTEGER
      },
      sum_carbohidrates: {
        type: Sequelize.INTEGER
      },
      product_weight: {
        type: Sequelize.INTEGER
      },
      type_of_meal_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Type_of_meals',
          },
          key: 'id',
        },
      },
      product_info_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Product_infos',
          },
          key: 'id',
        },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
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
    await queryInterface.dropTable('Daily_food_by_types');
  }
};