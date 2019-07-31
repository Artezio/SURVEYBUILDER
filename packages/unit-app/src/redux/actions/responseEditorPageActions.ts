import { responseProvider } from "../../providers/responseProvider";
import { questionnaireProvider } from '../../providers/questionnaireProvider'
import { createActionAsync } from "./actionCreators";
import { ACTIONS } from "../../constants/responseEditorPage";
import { createAction } from "redux-actions";


export const responseEditorPageActions = {
    loadResponseId: createActionAsync(
        [ACTIONS.LOAD_RESPONSE_FETCHING, ACTIONS.LOAD_RESPONSE_LOADED, ACTIONS.LOAD_RESPONSE_ERROR],
        (id: string) => responseProvider.getResponseById(id)
    ),
    loadQuestionnaireById: createActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.getQuestionnaireById(id)
    ),
    setModeToCreating: createAction(ACTIONS.SET_MODE_TO_CREATING),
    setModeToUpdating: createAction(ACTIONS.SET_MODE_TO_UPDATING),
    saveResponse: createActionAsync(
        [ACTIONS.SAVE_RESPONSE_SAVING, ACTIONS.SAVE_RESPONSE_SAVED, ACTIONS.SAVE_RESPONSE_ERROR],
        (response: any) => responseProvider.putResponse(response)
    )
}