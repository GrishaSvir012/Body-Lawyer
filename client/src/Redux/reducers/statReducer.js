import { GET_STATISTICS } from '../type';

const statReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_STATISTICS:
      return payload;

    default:
      return state;
  }
};

export default statReducer;
