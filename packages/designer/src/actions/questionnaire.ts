import { CREATE_QUESTIONNAIRE } from '../constants/actions';
import { createAction } from './helpers';
import * as Models from '@art-forms/models';


export const createQuestionnaire = (questionnaire?: Partial<Models.IQuestionnaire>) => {
    return createAction<CREATE_QUESTIONNAIRE, Partial<Models.IQuestionnaire> | undefined>(CREATE_QUESTIONNAIRE, questionnaire);
};