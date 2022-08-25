import React from 'react';
import './newRecipe.css';

export default function NewRecipe({ recipe }) {
  return (
    <div id="card-container">
      <div id="card-title">{recipe.title}</div>
      <div id="recipe-image" style={{ background: `url('${recipe.image}')` }} />
      <div id="card-items">
        <div className="card-item-title-in">ингридиенты</div>
        <ul className="checkmark">
          {recipe.ingridients.split('/').map((el) => <li>{el}</li>)}
        </ul>
      </div>

      <div id="method">
        <div className="card-item-title">пошаговая инструкция</div>
        <ul>
          {recipe.recipes.split('\n').map((el) => <li className="newLi">{el}</li>)}
        </ul>
      </div>
    </div>
  );
}
