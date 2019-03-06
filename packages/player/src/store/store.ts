import * as redux from 'redux';
import { questionnaire } from '../reducers/questionnaire';
import application from '../reducers/application';



export const createStore = (initialState?: any) => redux.createStore(
    redux.combineReducers({
        questionnaire,
        application
    }),
    initialState,
);