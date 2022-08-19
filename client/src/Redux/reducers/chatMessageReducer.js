import { ADD_CHAT_MESSAGE, ADD_CHAT_MESSAGES } from '../type';

const chatMessageReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAT_MESSAGE:
      return [payload, ...state];
    case ADD_CHAT_MESSAGES:
      return payload;
    default:
      return state;
  }
};

export default chatMessageReducer;
