import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import Axios from 'axios';

// import reducers from index file
import { Provider } from 'react-redux';
import store from './redux/store.js'


const getBooks = async () => {
    const response = await Axios.get('http://localhost:2000/posts')
    console.log(response)
    return response;
}

getBooks()



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
