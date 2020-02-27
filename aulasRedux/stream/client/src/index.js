<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
=======
  
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
>>>>>>> 1395e3e52c715c5c8f3dbcf13fae1c1a033304ff

import App from './components/App';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
<<<<<<< HEAD
    reducers,
    composeEnhancers(applyMiddleware())
)
=======
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);
>>>>>>> 1395e3e52c715c5c8f3dbcf13fae1c1a033304ff

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);