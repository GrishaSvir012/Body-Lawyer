import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { getChatMessages } from './actions/chatActions';
import bodyReducer from './reducers/bodyReducer';
import chatMessageReducer from './reducers/chatMessageReducer';
import chatUserReducer from './reducers/chatUsersReducer';
import userReducer from './reducers/userReducer';
import wsReducer from './reducers/wsReducer';
import rootSaga from './sagas/rootSaga';
import statReducer from './reducers/statReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    body: bodyReducer,
    user: userReducer,
    ws: wsReducer,
    chatUsers: chatUserReducer,
    messages: chatMessageReducer,
    statistics: statReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
