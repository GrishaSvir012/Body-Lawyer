const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const arrayProd = ['07', '23', '09', '02', '13', '26', '15', '25', '22', '19', '08', '12', '17', '06', '01', '18', '03', '28', '11', '04', '14', '29', '16', '24', '20'];

for (let j = 0; j < arrayProd.length; j += 1) {
  axios.get(`https://health-diet.ru/base_of_food/food_245${arrayProd[j]}/?utm_source=leftMenu&utm_medium=base_of_food`)
    .catch(console.log)
    .then((html) => {
      const $ = cheerio.load(html.data);
      let text = '';
      $('#mzr-grid-content > div > div:nth-child(2) > div > div > table > tbody > tr').each((i, elem) => {
        text += `${$(elem).text()}\n`;
      });
      const rem = text.split('\n').map((el) => el.replace(/\s{3,}/gm, '')).filter((el) => el !== '');
      const arr = [];
      for (let i = 0; i < rem.length; i += 5) {
        const obj = {};
        obj.food_name = rem[i];
        obj.calories = rem[i + 1].replace(/[^,.0-9]/gm, '').replace(',', '.');
        obj.protein = rem[i + 2].replace(/[^,.0-9]/gm, '').replace(',', '.');
        obj.fats = rem[i + 3].replace(/[^,.0-9]/gm, '').replace(',', '.');
        obj.carbohidrates = rem[i + 4].replace(/[^,.0-9]/gm, '').replace(',', '.');
        obj.createdAt = new Date();
        obj.updatedAt = new Date();
        arr.push(obj);
      }
      const string = JSON.stringify(arr).replace(/},/gm, '},\n');
      console.log(arr);
      fs.appendFile('Продукты.txt', string, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('File written successfully\n');
          console.log('The written has the following contents:');
        }
      });
    });
}