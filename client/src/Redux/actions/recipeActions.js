import axios from 'axios';
import { GET_RECIPE } from '../type';

export const recipesAction = (payload) => ({
  type: GET_RECIPE,
  payload,
});

export const getRecipeAction = (value) => (dispatch) => {
  axios.post('/recipes', { value })
    .then((res) => dispatch(recipesAction(res.data)))
    .catch((err) => console.log(err));
};
