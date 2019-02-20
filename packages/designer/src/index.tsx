import React from 'react';
import { render } from 'react-dom';
import MainView from './components/MainView';
import { Provider } from 'react-redux';
import { createStore } from './store/store';


render(
    <Provider store={createStore()}>
        <MainView />
    </Provider>,
    document.getElementById('root')
);