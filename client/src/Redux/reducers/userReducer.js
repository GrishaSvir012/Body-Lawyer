import { ADD_USER, ADD_BODY } from '../type';

const userReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_USER:
      return payload;
    case ADD_BODY:
      return { ...state, body: payload };
    default:
      return state;
  }
};

export default userReducer;
