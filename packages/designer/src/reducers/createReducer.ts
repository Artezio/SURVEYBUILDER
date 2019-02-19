import { combineReducers } from 'redux';
import questionnaireReducer from './questionnaire';

export const createReducer = () => combineReducers({
    questionnaire: questionnaireReducer
});

export default createReducer;