import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducers from "./reducers";
import createSagaMiddleware from 'redux-saga';
import mySaga from "./saga/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, composeWithDevTools( applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(mySaga)
window.store = store

export default store