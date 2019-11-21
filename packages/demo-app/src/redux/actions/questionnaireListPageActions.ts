import { createActionAsync } from './actionCreators';
import { ACTIONS } from '../../constants/questionnaireListPage';
import { questionnaireProvider } from '../../providers/questionnaireProvider';
import immortalResources from '../../data/initialQuestionnaires/immortalResources.json';
import { Store } from '../../interface/Store';

export const questionnaireListPageActions = {
    loadQuestionnaireList: createActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_LIST_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LIST_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_LIST_ERROR],
        () => questionnaireProvider.getQuestionnaireList()
    ),
    deleteQuestionnaire: createActionAsync(
        [ACTIONS.DELETE_QUESTIONNAIRE_DELETING, ACTIONS.DELETE_QUESTIONNAIRE_DELETED, ACTIONS.DELETE_QUESTIONNAIRE_ERROR],
        (id: string) => questionnaireProvider.deleteQuestionnaireById(id)
    ),
    deleteQuestionnaireConfirmed: createActionAsync(
        [ACTIONS.DELETE_QUESTIONNAIRE_DELETING, ACTIONS.DELETE_QUESTIONNAIRE_DELETED, ACTIONS.DELETE_QUESTIONNAIRE_ERROR],
        (id: string, getState: () => Store, dispatch: any) => {
            if (immortalResources.includes(id)) {
                throw new Error('Impossible to delete this questionnaire!');
            }
            if (confirm('Are you sure you want to delete this questionnaire?')) {
                return dispatch(questionnaireListPageActions.deleteQuestionnaire(id))
            }
        }
    )
}