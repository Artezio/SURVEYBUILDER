import { ACTIONS, STATUS_LOADING } from '../../constants/questionnaireListPage';
import { QuestionnaireListPageStore } from '../../interface/questionnaireListPage/QuestionnaireListPageStore';
import { Action } from '../../interface/Action';
import { STATUS_DELETING } from '../../constants/questionnaireListPage';

const INITIAL_STATE: QuestionnaireListPageStore = { status: {} };

export const questionnaireListPage = (state: QuestionnaireListPageStore = INITIAL_STATE, action: Action<ACTIONS, any>): QuestionnaireListPageStore => {
    switch (action.type) {
        case ACTIONS.LOAD_QUESTIONNAIRE_LIST_FETCHING: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingQuestionnaireList: STATUS_LOADING.fetching
                }
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_LIST_LOADED: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingQuestionnaireList: STATUS_LOADING.loaded
                },
                questionnaireList: action.payload
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_LIST_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    loadingQuestionnaireList: STATUS_LOADING.error
                }
            }
        }
        case ACTIONS.DELETE_QUESTIONNAIRE_DELETING: {
            return {
                ...state,
                status: {
                    ...state.status,
                    deletingQuestionnaire: STATUS_DELETING.deleting
                }
            }
        }
        case ACTIONS.DELETE_QUESTIONNAIRE_DELETED: {
            return {
                ...state,
                status: {
                    ...state.status,
                    deletingQuestionnaire: STATUS_DELETING.deleted
                },
                questionnaireList: state.questionnaireList && state.questionnaireList.filter(q => q.id !== action.payload)
            }
        }
        case ACTIONS.DELETE_QUESTIONNAIRE_ERROR: {
            return {
                ...state,
                status: {
                    ...state.status,
                    deletingQuestionnaire: STATUS_DELETING.error
                }
            }
        }
        default: return state;
    }
}

export default questionnaireListPage;