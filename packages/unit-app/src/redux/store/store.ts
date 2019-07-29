import * as redux from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { questionnaireListPage } from '../reducers/questionnaireListPage';
import { questionnaireEditorPage } from '../reducers/questionnaireEditorPage';

export const createStore = (initialState?: any) => redux.createStore(
    redux.combineReducers({
        questionnaireListPage,
        questionnaireEditorPage
    }),
    initialState,
    redux.applyMiddleware(logger, thunk),
);

export default createStore;