import axios from 'axios';
import { ADD_BODY } from '../type';

export const userAdd = (value) => ({
  type: ADD_BODY,
  payload: value,
});

export const userBody = (data) => (dispatch) => {
  axios.post('/user/body', data)
    .then((res) => dispatch(userBody(res.data)))
    .catch((err) => console.log(err));
};
