import { CREATE_QUESTIONNAIRE_RESPONSE } from '../constants/actions';
import { createAction } from './helpers';
import * as Models from '@art-forms/models';


export const createQuestionnaireResponse = (questionnaire: Models.IQuestionnaire) => {
    return createAction<CREATE_QUESTIONNAIRE_RESPONSE, Models.IQuestionnaire | undefined>(CREATE_QUESTIONNAIRE_RESPONSE, questionnaire);
};