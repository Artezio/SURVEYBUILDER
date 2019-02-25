import * as redux from 'redux';
import { combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import questionnaire from '../reducers/questionnaire';
import { Store } from '../interfaces/Store';

export const createStore = (initialState?: Store) => redux.createStore(
    combineReducers({
        questionnaire
    }),
    initialState,
    applyMiddleware(logger),
);

export default createStore;