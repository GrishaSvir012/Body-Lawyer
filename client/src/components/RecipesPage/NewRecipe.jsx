import React from 'react';
import './newRecipe.css';

export default function NewRecipe({ recipe }) {
  console.log('efewgweg');
  return (
    <div id="card-container">
      <div id="card-title">{recipe.title}</div>
      <div id="recipe-image" style={{ background: `url('${recipe.image}')` }} />
      <div id="card-items">
        <span className="card-item-title">ингридиенты</span>
        <ul className="checkmark">
          {recipe.ingridients.split('/').map((el) => <li>{el}</li>)}
        </ul>
      </div>

      <div id="method">
        <span className="card-item-title">пошаговая инструкция</span>
        <ol>
          {recipe.recipes.split('\n').map((el) => <li>{el}</li>)}
        </ol>
      </div>
    </div>
  );
}
