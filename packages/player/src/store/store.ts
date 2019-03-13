import * as redux from 'redux';
import { questionnaire } from '../reducers/questionnaire';
import { questionnaireResponse } from '../reducers/questionnaireResponse';
import { Store } from '../interfaces/Store';
import logger from 'redux-logger';



export const createStore = (initialState?: Store) => redux.createStore(
    redux.combineReducers({
        questionnaire,
        questionnaireResponse
    }),
    initialState,
    redux.applyMiddleware(logger)
);