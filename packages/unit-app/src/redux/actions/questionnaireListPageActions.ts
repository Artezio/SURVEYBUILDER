import * as Models from '@art-forms/models';
import { createActionAsync } from './actionCreators';
import { ACTIONS } from '../../constants/questionnaireListPage';
import { questionnaireProvider } from '../../providers/questionnaireProvider';

export const questionnaireListPageActions = {
    loadQuestionnaireList: createActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_LIST_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LIST_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_LIST_ERROR],
        () => questionnaireProvider.getQuestionnaireList()
    ),
    deleteQuestionnaire: createActionAsync(
        [ACTIONS.DELETE_QUESTIONNAIRE_DELETING, ACTIONS.DELETE_QUESTIONNAIRE_DELETED, ACTIONS.DELETE_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.deleteQuestionnaireById(id)
    )
}