import { applyMiddleware, createStore } from 'redux';
import { ICartState } from './modules/cart/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSageMiddleware from 'redux-saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

export interface IState {
  cart: ICartState;
}

// -- Cria os sagas
const sagaMiddleware = createSageMiddleware();

// -- Array de sagas
const middlewares = [sagaMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    // -- Aplica os mddlewares 
    applyMiddleware(...middlewares),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;