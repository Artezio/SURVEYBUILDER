import * as Models from '@art-forms/models';
import { createAction } from './helpers';
import { UPDATE_QUESTIONNAIRE_RESPONSE_ITEM } from '../constants/actions';


export const updateQuestionnaireResponseItem = (item: Partial<Models.QuestionnaireResponseItem>) => {
    return createAction<UPDATE_QUESTIONNAIRE_RESPONSE_ITEM, Models.QuestionnaireResponseItem>(UPDATE_QUESTIONNAIRE_RESPONSE_ITEM, {
        ...item as Models.QuestionnaireResponseItem
    })
}