import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { pokemonReducer  } from "./reducers/pokemon";
import { Provider } from "react-redux";
import { legacy_createStore as createStore } from 'redux'
// import './index.css' 

const store = createStore(pokemonReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </Provider>

)
