import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { pokemonReducer  } from "./reducers/pokemon";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk';
import { logger } from './middleware';

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(pokemonReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
)
