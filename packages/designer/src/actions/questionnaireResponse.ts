import { CREATE_QUESTIONNAIRE_RESPONSE } from '../constants/actions';
import { createAction } from './helpers';
import * as Models from '@art-forms/models';


export const createQuestionnaireResponse = (questionnaireResponse?: Partial<Models.IQuestionnaireResponse>) => {
    return createAction<CREATE_QUESTIONNAIRE_RESPONSE, Partial<Models.IQuestionnaireResponse> | undefined>(CREATE_QUESTIONNAIRE_RESPONSE, questionnaireResponse);
};