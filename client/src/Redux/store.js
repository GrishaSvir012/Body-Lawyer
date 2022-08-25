import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { getChatMessages } from './actions/chatActions';
import allProductsReducer from './reducers/allProductReducer';
import bodyReducer from './reducers/bodyReducer';
import chatMessageReducer from './reducers/chatMessageReducer';
import chatUserReducer from './reducers/chatUsersReducer';
import productsReducer from './reducers/productsReducer';
import userReducer from './reducers/userReducer';
import recipeReducer from './reducers/recipeReducer';
import wsReducer from './reducers/wsReducer';
import rootSaga from './sagas/rootSaga';
import statReducer from './reducers/statReducer';

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
    allProduct: allProductsReducer,
    statistics: statReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
export default store;
