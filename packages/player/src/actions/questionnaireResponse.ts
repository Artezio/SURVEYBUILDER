import * as Models from '@art-forms/models';
import { createAction } from './helpers';
import { UPDATE_QUESTIONNAIRE_RESPONSE, ADD_QUESTIONNAIRE_RESPONSE_ITEM } from '../constants/actions';
import uuid from 'uuid/v1';


export const updateQuestionnaireResponse = (questionnaireResponse: Partial<Models.IQuestionnaireResponse>) => {
    return createAction<UPDATE_QUESTIONNAIRE_RESPONSE, Models.IQuestionnaireResponse>(UPDATE_QUESTIONNAIRE_RESPONSE, {
        ...questionnaireResponse as Models.IQuestionnaireResponse
    })
}

export const addQuestionnaireResponseItem = (item?: Partial<Models.IQuestionnaireResponseItem>) => {
    return createAction<ADD_QUESTIONNAIRE_RESPONSE_ITEM, Models.IQuestionnaireResponseItem>(ADD_QUESTIONNAIRE_RESPONSE_ITEM, {
        id: uuid(),
        ...item as Omit<Models.IQuestionnaireResponseItem, 'id'>
    })
}