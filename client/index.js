import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import style from './main.scss';
import initialState from './reducers/initialState.js'
const store = createStore(reducers, initialState,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
<App /></Provider>, document.getElementById('root'));