import { GET_PRODUCT } from '../type';

const productsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCT:
      return payload;

    default:
      return state;
  }
};

export default productsReducer;
