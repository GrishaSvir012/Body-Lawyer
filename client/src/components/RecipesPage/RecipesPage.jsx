import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Col, Form, Input, InputGroup, Row
} from 'reactstrap';
import { getRecipeAction, recipesAction } from '../../Redux/actions/recipeActions';
import CardRecipes from './CardRecipes';
import NewRecipe from './NewRecipe';

export default function RecipesPage() {
  const [input, setInput] = useState('');
  const recipes = useSelector((state) => state.recipe);

  const dispatch = useDispatch();

  const inputHandler = (e) => setInput(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(getRecipeAction(input));
    setInput('');
  };

  return (
    <Row>
      <Form onSubmit={submitHandler}>
        <InputGroup className="input-task">
          <Input
            type="text"
            name="post"
            value={input}
            onChange={inputHandler}
            placeholder="write here..."
          />
          <Button type="submit" color="success">
            Ввод
          </Button>
        </InputGroup>
      </Form>
      <div className="recipesList" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {recipes.map((el) => (
          <NewRecipe key={el.id} recipe={el} />
        ))}
      </div>
    </Row>
  );
}
