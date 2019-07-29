import * as Models from '@art-forms/models';
import { creatActionAsync } from './actionCreators';
import { ACTIONS } from '../../constants/questionnaireListPage';
import { questionnaireProvider } from '../../providers/questionnaireProvider';

export const questionnaireListPageActions = {
    loadQuestionnaireList: creatActionAsync(
        [ACTIONS.LOAD_QUESTIONNAIRE_LIST_FETCHING, ACTIONS.LOAD_QUESTIONNAIRE_LIST_LOADED, ACTIONS.LOAD_QUESTIONNAIRE_LIST_ERROR],
        () => questionnaireProvider.getQuestionnaireList()
    )
}