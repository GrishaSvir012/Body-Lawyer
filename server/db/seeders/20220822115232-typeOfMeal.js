module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Type_of_meals',
      [
        {
          type: 'Завтрак',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Обед',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Ужин',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          type: 'Перекус',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Type_of_meals', null, {});
  }
};
