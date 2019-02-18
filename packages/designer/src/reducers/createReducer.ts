import { combineReducers } from 'redux';
import questionnaireReducer from './questionnaireReducer';

export const createReducer = () => combineReducers({
    questionnaire: questionnaireReducer
});

export default createReducer;