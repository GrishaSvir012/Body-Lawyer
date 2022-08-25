import { ADD_BODY, GET_USER_BODY } from '../type';

const getBodyReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_BODY:
      return payload;
    default:
      return state;
  }
};

export default getBodyReducer;
