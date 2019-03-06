import * as redux from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import questionnaire from '../reducers/questionnaire';
import { Store } from '../interfaces/Store';
import application from '../reducers/application'


export const createStore = (initialState?: Store) => redux.createStore(
    combineReducers({
        questionnaire,
        application
    }),
    initialState,
    applyMiddleware(logger),
);

export const store = createStore();