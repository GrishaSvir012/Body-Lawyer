import { ADD_CHAT_USER } from '../type';

const chatUserReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAT_USER:
      return payload;

    default:
      return state;
  }
};

export default chatUserReducer;
