import * as redux from 'redux';
import logger from 'redux-logger';
import questionnaire from '../reducers/questionnaire';
import { Store } from '../interfaces/Store';
import application from '../reducers/application';
import { questionnaireResponse } from '@art-forms/player';


export const createStore = (initialState?: Store) => redux.createStore(
    redux.combineReducers({
        questionnaire,
        application,
        questionnaireResponse
    }),
    initialState,
    redux.applyMiddleware(logger),
);

export const store = createStore();