import * as Models from '@art-forms/models';
import { createAction } from './helpers';
import { UPDATE_QUESTIONNAIRE_RESPONSE_ITEM } from '../constants/actions';


export const updateQuestionnaireResponseItem = (item: Partial<Models.IQuestionnaireResponseItem>) => {
    return createAction<UPDATE_QUESTIONNAIRE_RESPONSE_ITEM, Models.IQuestionnaireResponseItem>(UPDATE_QUESTIONNAIRE_RESPONSE_ITEM, {
        ...item as Models.IQuestionnaireResponseItem
    })
}