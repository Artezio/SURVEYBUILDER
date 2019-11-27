import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from './redux/store/store';
import App from './App';

render(
    <Provider store={createStore() as any}>
        <App />
    </Provider>,
    document.getElementById('root')
);