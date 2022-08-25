import axios from 'axios';
import { GET_ALL_PRODUCT } from '../type';

export const allProduct = (value) => ({
  type: GET_ALL_PRODUCT,
  payload: value,
});

export const allProductGetAction = (type, calendar) => (dispatch) => {
  axios.get(`/insertyourfood/getAllProduct?type=${type}&calendar=${calendar}`)
    .then((res) => dispatch(allProduct(res.data)))
    .catch((err) => console.log(err));
};
