import * as Models from '@art-forms/models';
import { createAction } from './helpers';
import { CREATE_QUESTIONNAIRE_RESPONSE, UPDATE_QUESTIONNAIRE_RESPONSE, ADD_QUESTIONNAIRE_RESPONSE_ITEM } from '../constants/actions';
import uuid from 'uuid/v1';


export const createQuestionnaireResponse = (questionnaireResponse?: Partial<Models.QuestionnaireResponse>) => {
    return createAction<CREATE_QUESTIONNAIRE_RESPONSE, Models.QuestionnaireResponse>(CREATE_QUESTIONNAIRE_RESPONSE, {
        id: uuid(),
        ...questionnaireResponse
    })
}

export const updateQuestionnaireResponse = (questionnaireResponse: Partial<Models.QuestionnaireResponse>) => {
    return createAction<UPDATE_QUESTIONNAIRE_RESPONSE, Models.QuestionnaireResponse>(UPDATE_QUESTIONNAIRE_RESPONSE, {
        ...questionnaireResponse as Models.QuestionnaireResponse
    })
}

export const addQuestionnaireResponseItem = (item?: Partial<Models.QuestionnaireResponseItem>) => {
    return createAction<ADD_QUESTIONNAIRE_RESPONSE_ITEM, Models.QuestionnaireResponseItem>(ADD_QUESTIONNAIRE_RESPONSE_ITEM, {
        id: uuid(),
        ...item as Omit<Models.QuestionnaireResponseItem, 'id'>
    })
}