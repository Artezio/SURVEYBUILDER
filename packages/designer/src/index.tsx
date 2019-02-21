import React from 'react';
import { render } from 'react-dom';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import { createStore } from './store/store';
import { createQuestionnaire } from './actions/questionnaire';

render(
    <Provider store={createStore()}>
        <Layout />
    </Provider>,
    document.getElementById('root')
);

// const store = createStore();

// store.dispatch(createQuestionnaire({ id: '12' }))