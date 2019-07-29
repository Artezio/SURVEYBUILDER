import { ACTIONS, STATUS } from '../../constants/questionnaireListPage';
import { QuestionnaireListStore } from '../../interface/questionnaireListPage/QuestionnaireListStore';
import { Action } from '../../interface/Action';

const INITIAL_STATE: QuestionnaireListStore = { status: STATUS.fetchingQuestionnaireList };

export const questionnaireListPage = (state: QuestionnaireListStore = INITIAL_STATE, action: Action<ACTIONS, any>): QuestionnaireListStore => {
    switch (action.type) {
        case ACTIONS.LOAD_QUESTIONNAIRE_LIST_FETCHING: {
            return {
                ...state,
                status: STATUS.fetchingQuestionnaireList
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_LIST_LOADED: {
            return {
                ...state,
                status: STATUS.loadedQuestionnaireList,
                questionnaireList: action.payload
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_LIST_ERROR: {
            return {
                ...state,
                status: STATUS.errorQuestionnaireList
            }
        }
        default: return state;
    }
}

export default questionnaireListPage;