const fs = require('fs').promises;
const path = require('path');

module.exports = {
  async up(queryInterface, Sequelize) {
    const products = await fs.readFile(path.join(__dirname, './parsingProducts/Продукты.txt'), 'utf-8');
    console.log(JSON.parse(products));
    await queryInterface.bulkInsert('Product_infos', JSON.parse(products));
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Product_infos', null, {});
  }
};
