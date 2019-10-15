import { responseProvider } from "../../providers/responseProvider";
import { questionnaireProvider } from '../../providers/questionnaireProvider'
import { createActionAsync } from "./actionCreators";
import { ACTIONS } from "../../constants/responseListPage";


export const responseListPageActions = {
    loadResponseListByQuestionnaireId: createActionAsync(
        [ACTIONS.LOAD_RESPONSE_LIST_FETCHING, ACTIONS.LOAD_RESPONSE_LIST_LOADED, ACTIONS.LOAD_RESPONSE_LIST_ERROR],
        (id: string) => responseProvider.getResponseListByQuestionnaireId(id)
    ),
    loadQuestionnaireById: createActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.getQuestionnaireById(id)
    ),
    deleteQuestionnaireById: createActionAsync(
        [ACTIONS.DELETE_QUESTIONNAIRE_DELETING, ACTIONS.DELETE_QUESTIONNAIRE_DELETED, ACTIONS.DELETE_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.deleteQuestionnaireById(id)
    )
}