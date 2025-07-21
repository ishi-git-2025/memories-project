import React from 'react';
import ReactDOM from 'react-dom/client';  // connects your React components to the actual HTML page in the browser, bridge that takes your React code and shows it on the web page
import {Provider} from 'react-redux';  // makes your Redux store available to all components in your app
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';

import reducers from './reducers'
import App from './App.js';

const store = createStore(reducers, compose(applyMiddleware(thunk)) ) //compose- Combines multiple store enhancers or middleware

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
</Provider>);
 // First make a react root inside the 'root' div, then tell React to put or inject the App inside it
