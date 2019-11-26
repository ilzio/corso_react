import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// import reducers from index file
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// rootReducer defines name of state subcomponents!

// creates store with importer combined reducers
let store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f //DEPRECATED!!!!
    )
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
