import { createActionAsync } from "./actionCreators";
import { ACTIONS } from '../../constants/questionnaireEditorPage';
import { createAction } from "redux-actions";
import { questionnaireProvider } from "../../providers/questionnaireProvider";

export const questionnaireEditorPageActions = {
    loadQuestionnaire: createActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.getQuestionnaireById(id)
    ),
    createNewQuestionnaire: createAction(ACTIONS.CREATE_NEW_QUESTIONNAIRE),
    saveNewQuestionnaire: createActionAsync(
        [ACTIONS.SAVE_NEW_QUESTIONNAIRE_SAVING, ACTIONS.SAVE_NEW_QUESTIONNAIRE_SAVED, ACTIONS.SAVE_NEW_QUESTIONNAIRE_ERROR],
        (questionnaire: any) => questionnaireProvider.putQuestionnaire(questionnaire)
    ),
    updateQuestionnaireById: createActionAsync(
        [ACTIONS.UPDATE_QUESTIONNAIRE_UPDATING, ACTIONS.UPDATE_QUESTIONNAIRE_UPDATED, ACTIONS.UPDATE_QUESTIONNAIRE_ERROR],
        (id: string, questionnaire: any) => questionnaireProvider.updateQuestionnaire(questionnaire)
    ),
    resetSavingStatus: createAction(ACTIONS.RESET_SAVING_STATUS),
    resetUpdatingStatus: createAction(ACTIONS.RESET_UPDATING_STATUS),
}