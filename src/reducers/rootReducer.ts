import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import { combineReducers } from "redux"
import { pokemonsReducer } from './pokemon';
import { uiReducer } from './ui';
import { logger } from '../middleware';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const rootReducer = combineReducers({
  data: pokemonsReducer,
  ui: uiReducer,
});

const store = createStore(rootReducer, composedEnhancers);

export default store;