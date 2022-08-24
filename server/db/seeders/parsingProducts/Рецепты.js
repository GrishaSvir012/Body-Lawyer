const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

for (let j = 102184; j <= 102500; j += 1) {
  axios.get(`https://av.ru/ideas/recipe_list/${j}`)
    .catch((err) => {
      console.log(err);
    })
    .then((html) => {
    // console.log('--------->>>>>>>', html);
      if (html) {
        const $ = cheerio.load(html.data);
        let img = '';
        $('.b-recipe-detail__cover img').each((i, elem) => {
          img += `${$(elem).attr('src')}`;
        });
        const image = img;
        // console.log(image);
        let titl = '';
        $('.b-recipe-detail__title').each((i, elem) => {
          titl += `${$(elem).text()}`;
        });
        const title = titl.replace(/\s{3,}/g, '');
        // console.log(title);
        let rec = '';
        $('.b-recipe-detail__steps-list').each((i, elem) => {
          rec += `${$(elem).text()}\n`;
        });
        const recipe = rec.split('\n').map((el) => el.replace(/\s{3,}/gm, '')).filter((el) => el !== '');
        const recipes = recipe.join('').replace(/\./g, '. \n').slice(0, -1);
        // console.log(recipes);
        let ingrid = '';
        $('.b-recipe-detail__ingridients-table').each((i, elem) => {
          ingrid += `${$(elem).text()}\n`;
        });
        const ingridientsArr = ingrid.replace(/\s{3,}/g, '\n').split('\n').filter((el) => el !== '');
        // console.log(ingridientsArr);
        let ingridient = '';
        for (let i = 0; i < ingridientsArr.length; i += 2) {
          ingridient = `${ingridient}/${ingridientsArr[i]}: ${ingridientsArr[i + 1]}`;
        }
        const ingridients = (ingridient.slice(1));

        const allRecipes = {
          image,
          title,
          recipes,
          ingridients,
        };
        const string = `${JSON.stringify(allRecipes)}\n`;
        console.log(string);
        fs.appendFile('Рецепты2.txt', string, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('File written successfully\n');
            console.log('The written has the following contents:');
          }
        });
      }
    });
}
