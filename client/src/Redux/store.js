import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { getChatMessages } from './actions/chatActions';
import bodyReducer from './reducers/bodyReducer';
import chatMessageReducer from './reducers/chatMessageReducer';
import chatUserReducer from './reducers/chatUsersReducer';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';
import recipeReducer from './reducers/recipeReducer';
import wsReducer from './reducers/wsReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    body: bodyReducer,
    user: userReducer,
    ws: wsReducer,
    chatUsers: chatUserReducer,
    messages: chatMessageReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
