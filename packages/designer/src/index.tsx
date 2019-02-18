import React from 'react';
import { render } from 'react-dom';
import MainView from './components/MainView';
import { Provider } from 'react-redux';
import { makeStore } from './store/store';


render(
    <Provider store={makeStore()}>
        <MainView />
    </Provider>,
    document.getElementById('root')
);