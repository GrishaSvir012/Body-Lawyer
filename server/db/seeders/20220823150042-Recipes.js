const fs = require('fs').promises;
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const recipes = await fs.readFile(path.join(__dirname, './parsingProducts/Рецепты.txt'), 'utf-8');
    await queryInterface.bulkInsert('Recipes', JSON.parse(recipes));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  }
};
