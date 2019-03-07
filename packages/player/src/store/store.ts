import * as redux from 'redux';
import { questionnaire } from '../reducers/questionnaire';



export const createStore = (initialState?: any) => redux.createStore(
    redux.combineReducers({
        questionnaire
    }),
    initialState,
);