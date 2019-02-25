import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { createStore } from './store/store';

render(
    <Provider store={createStore()}>
        <Layout />
    </Provider>,
    document.getElementById('root')
);