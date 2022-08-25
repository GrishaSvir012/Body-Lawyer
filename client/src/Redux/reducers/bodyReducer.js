import { ADD_BODY, GET_USER_BODY } from '../type';

const bodyReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BODY:
      return { ...state, body: payload };
    case GET_USER_BODY:
      return payload;
    default:
      return state;
  }
};

export default bodyReducer;
