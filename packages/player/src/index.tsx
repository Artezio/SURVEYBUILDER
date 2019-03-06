import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { createStore } from './store/store';

render(
    <Provider store={createStore()}>
        <App />
    </Provider>,
    document.getElementById('root')
)