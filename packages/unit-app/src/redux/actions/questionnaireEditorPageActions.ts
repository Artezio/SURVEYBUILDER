import { creatActionAsync } from "./actionCreators";
import { ACTIONS } from '../../constants/questionnaireEditorPage';
import { questionnaireProvider } from '../../providers/questionnaireProvider';

export const questionnaireEditorPageActions = {
    loadQuestionnaire: creatActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.getQuestionnaireById(id)
    )
}