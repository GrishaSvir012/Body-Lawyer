import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Col, Form, Input, InputGroup, Row
} from 'reactstrap';
import { getRecipeAction } from '../../Redux/actions/recipeActions';
import NewRecipe from './NewRecipe';
import './newRecipe.css';

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
    <Row className="recipesRow">
      <Form className="formInputRecipes" onSubmit={submitHandler}>
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
