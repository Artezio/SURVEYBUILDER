import { responseProvider } from "../../providers/responseProvider";
import { questionnaireProvider } from '../../providers/questionnaireProvider'
import { createActionAsync } from "./actionCreators";
import { ACTIONS } from "../../constants/responseEditorPage";
import { createAction } from "redux-actions";
import { questionnaireResponseConverter } from '@art-forms/fhir-converter';
import { Store } from '../../interface/Store';
import { MODE } from '../../constants/responseEditorPage';

export const responseEditorPageActions = {
    loadResponseById: createActionAsync(
        [ACTIONS.LOAD_RESPONSE_FETCHING, ACTIONS.LOAD_RESPONSE_LOADED, ACTIONS.LOAD_RESPONSE_ERROR],
        (id: string) => responseProvider.getResponseById(id)
    ),
    loadQuestionnaireById: createActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.getQuestionnaireById(id)
    ),
    saveResponse: createActionAsync(
        [ACTIONS.SAVE_RESPONSE_SAVING, ACTIONS.SAVE_RESPONSE_SAVED, ACTIONS.SAVE_RESPONSE_ERROR],
        (response: any, getState: () => Store) => {
            const mappedResponse = questionnaireResponseConverter.fromModel(response);
            const { responseEditorPage } = getState();
            console.log('LOG', getState());
            if (responseEditorPage.mode === MODE.creating) {
                return responseProvider.putResponse(mappedResponse)
            }
            if (responseEditorPage.mode === MODE.updating) {
                return responseProvider.updateResponse(mappedResponse)
            }
        }
    ),
    resetSavingStatus: createAction(ACTIONS.RESET_SAVING_STATUS),
    resetResources: createAction(ACTIONS.RESET_RESOURCES),
    createNewResponse: createAction(ACTIONS.CREATE_NEW_RESPONSE)
}