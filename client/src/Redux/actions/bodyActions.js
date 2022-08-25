/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { ADD_BODY, GET_USER_BODY } from '../type';

export const userBodyAdd = (data) => (dispatch) => {
  axios.post('/user/body', data)
    .then((res) => dispatch({ type: ADD_BODY, payload: res.data }))
    .catch((err) => console.log(err));
};
