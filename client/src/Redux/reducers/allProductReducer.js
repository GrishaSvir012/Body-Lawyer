import { GET_ALL_PRODUCT } from '../type';

const allProductsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_PRODUCT:
    //   return [...state, payload];
      return payload;

    default:
      return state;
  }
};

export default allProductsReducer;
