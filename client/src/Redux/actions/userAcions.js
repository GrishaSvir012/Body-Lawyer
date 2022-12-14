import axios from 'axios';
import { ADD_USER } from '../type';

export const userAdd = (value) => ({
  type: ADD_USER,
  payload: value,
});

export const userSignUp = (data) => (dispatch) => {
  axios.post('/user/signup', data)
    .then((res) => dispatch(userAdd(res.data)))
    .catch((err) => console.log(err));
};
export const userCheck = () => (dispatch) => {
  axios.post('/user/check')
    .then((res) => dispatch(userAdd(res.data)))
    .catch((err) => dispatch(userAdd({})));
};

export const signInUser = (input) => (dispatch) => {
  axios.post('/user/signin', input)
    .then((res) => dispatch(userAdd(res.data)))
    .catch((err) => console.log(err));
};

export const logoutUser = () => (dispatch) => {
  axios('/user/logout')
    .then((res) => dispatch(userAdd({})))
    .catch((err) => console.log('err'));
};
