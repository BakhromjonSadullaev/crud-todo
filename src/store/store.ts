import { applyMiddleware, combineReducers, createStore } from 'redux';
import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';

const saga = createSagaMiddleware();

const middleware = [saga];

const store = createStore(combineReducers(rootReducer), applyMiddleware(...middleware));

saga.run(rootSaga);

export { store };