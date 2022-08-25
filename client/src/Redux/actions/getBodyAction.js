/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_USER_BODY } from '../type';

export const getUserBodyGet = () => (dispatch) => {
  axios.get('/user/body/userStat')
    .then((res) => dispatch({ type: GET_USER_BODY, payload: res.data }))
    .catch((err) => console.log(err));
};
