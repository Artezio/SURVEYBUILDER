import * as redux from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { questionnaireListPage } from '../reducers/questionnaireListPage';
import { questionnaireEditorPage } from '../reducers/questionnaireEditorPage';
import { responseListPage } from '../reducers/responseListPage';
import { responseEditorPage } from '../reducers/responseEditorPage';
import { mainLayout } from '../reducers/mainLayout';

export const createStore = (initialState?: any) => redux.createStore(
    redux.combineReducers({
        questionnaireListPage,
        questionnaireEditorPage,
        responseListPage,
        responseEditorPage,
        mainLayout
    }),
    initialState,
    redux.applyMiddleware(logger, thunk),
);

export default createStore;