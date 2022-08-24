/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_STATISTICS } from '../type';

export const userStatAdd = (data) => (dispatch) => {
  axios.get('/statistics')
    .then((res) => dispatch({ type: GET_STATISTICS, payload: res.data }))
    .catch((err) => console.log(err));
};
