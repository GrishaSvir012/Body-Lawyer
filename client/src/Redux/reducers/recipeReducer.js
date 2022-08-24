import { GET_RECIPE } from '../type';

const recipeReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_RECIPE:
      return payload;

    default:
      return state;
  }
};

export default recipeReducer;
