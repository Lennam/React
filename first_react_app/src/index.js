import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterPanel from './views/CounterPanel.js'
import store from './Store.js';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <CounterPanel />
    </Provider>, 
    document.getElementById('root')
);

