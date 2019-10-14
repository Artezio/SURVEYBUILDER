import { createActionAsync } from "./actionCreators";
import { ACTIONS, MODE } from '../../constants/questionnaireEditorPage';
import { createAction } from "redux-actions";
import { questionnaireProvider } from "../../providers/questionnaireProvider";
import { Store } from "../../interface/Store";
import { questionnaireConverter } from "@art-forms/fhir-converter";

export const questionnaireEditorPageActions = {
    loadQuestionnaire: createActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.getQuestionnaireById(id)
    ),
    createNewQuestionnaire: createAction(ACTIONS.CREATE_NEW_QUESTIONNAIRE),
    save: createActionAsync(
        [ACTIONS.SAVE_NEW_QUESTIONNAIRE_SAVING, ACTIONS.SAVE_NEW_QUESTIONNAIRE_SAVED, ACTIONS.SAVE_NEW_QUESTIONNAIRE_ERROR],
        (getState: () => Store) => {
            const { questionnaireEditorPage } = getState();
            const mappedQuestionnaire = questionnaireConverter.fromModel(questionnaireEditorPage.questionnaireModel) as any;
            mappedQuestionnaire.date = new Date().toISOString();
            mappedQuestionnaire.publisher = "LLC Artezio";
            if (questionnaireEditorPage.mode === MODE.creating) {
                return questionnaireProvider.putQuestionnaire(mappedQuestionnaire);
            }
            if (questionnaireEditorPage.mode === MODE.updating) {
                return questionnaireProvider.updateQuestionnaire(mappedQuestionnaire);
            }
        }
    ),
    resetSavingStatus: createAction(ACTIONS.RESET_SAVING_STATUS),
    resetUpdatingStatus: createAction(ACTIONS.RESET_UPDATING_STATUS),
}