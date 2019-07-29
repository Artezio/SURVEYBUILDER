import { ACTIONS, STATUS } from '../../constants/questionnaireEditorPage';
import { QuestionnaireEditorStore } from '../../interface/questionnaireEditorPage/QuestionnaireEditorStore';
import { Action } from '../../interface/Action';

const INITIAL_STATE: QuestionnaireEditorStore = { status: STATUS.fetchingQuestionnaire, mode: 'bla' };

export const questionnaireEditorPage = (state: QuestionnaireEditorStore = INITIAL_STATE, action: Action<ACTIONS, any>): QuestionnaireEditorStore => {
    switch (action.type) {
        case ACTIONS.LOAD_QUESTIONNAIRE_FETCHING: {
            return {
                ...state,
                status: STATUS.fetchingQuestionnaire
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_LOADED: {
            return {
                ...state,
                status: STATUS.loadedQuestionnaire,
                questionnaire: action.payload
            }
        }
        case ACTIONS.LOAD_QUESTIONNAIRE_ERROR: {
            return {
                ...state,
                status: STATUS.errorQuestionnaire
            }
        }
        default: return state;
    }
}

export default questionnaireEditorPage;