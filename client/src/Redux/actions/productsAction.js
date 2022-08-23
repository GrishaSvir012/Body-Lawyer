import axios from 'axios';
import { GET_PRODUCT } from '../type';

export const productsAction = (payload) => ({
  type: GET_PRODUCT,
  payload,
});
export const getProductsAction = (value) => (dispatch) => {
  axios.post('/insertyourfood/input', value)
    .then((res) => dispatch(productsAction(res.data)))
    .catch((err) => console.log(err));
};
