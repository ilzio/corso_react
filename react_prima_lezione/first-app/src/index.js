import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// import reducers from index file
import reducers from './reducers'
import {createStore} from 'redux';
import { Provider } from 'react-redux';


// creates store with importer combined reducers
let store = createStore(
    reducers, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    )


// Actions -> describe what is to be done. 
// Arrow functions that return an object


const increment = (payload) => {
    return{
        type: 'INCREMENT',
    }
}
const incrementBy = (payload) => {
    return {
        type: 'INCREMENT_BY',
        payload
    }
}

const decrement = () => {
    return{
        type: 'DECREMENT'
    }
}

const login = () => {
    return {
        type: 'SIGN_IN'
    }
}



// Store

// Display state in console

store.subscribe(()=> console.log(store.getState()))

// Dispatch 
store.dispatch(incrementBy(25))
store.dispatch(decrement())
store.dispatch(login())



ReactDOM.render(
<Provider store={store}>
    <App  />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
