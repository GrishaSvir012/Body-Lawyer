import { SET_WS, SOCKET_INIT } from '../type';

export const setWs = (ws) => ({
  type: SET_WS,
  payload: ws,
});

export const socketInit = () => ({ type: SOCKET_INIT });
