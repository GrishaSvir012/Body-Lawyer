const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const arrayProd = ['52', '43', '49', '44', '45', '54', '50', '47', '48', '42', '53', '41', '51'];
const arrayFile = ['Варенье и джемы', 'Вторые блюда', 'Выпечка', 'Гарниры', 'Десерты', 'Заготовки', 'Закуски', 'Каши', 'Напитки', 'Первые блюда', 'Полуфабрикаты', 'Салаты', 'Соусы и заправки'];

for (let j = 0; j < arrayProd.length; j += 1) {
  axios.get(`https://health-diet.ru/base_of_meals/meals_212${arrayProd[j]}/`)
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
      fs.appendFile(`${arrayFile[j]}.txt`, string, (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('File written successfully\n');
          console.log('The written has the following contents:');
        }
      });
    });
}

// fs.readFile('products.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.split('\n'));
//   }
// });
