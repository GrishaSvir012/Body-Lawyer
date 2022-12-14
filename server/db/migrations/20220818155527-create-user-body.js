module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_bodies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      weigth: {
        type: Sequelize.INTEGER
      },
      age: {
        type: Sequelize.INTEGER
      },
      height: {
        type: Sequelize.INTEGER
      },
      mission: {
        type: Sequelize.STRING
      },
      activity: {
        type: Sequelize.FLOAT
      },
      calories_needed: {
        type: Sequelize.INTEGER
      },
      protein_needed: {
        type: Sequelize.INTEGER
      },
      fats_needed: {
        type: Sequelize.INTEGER
      },
      carbohidrates_needed: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('User_bodies');
  }
};
