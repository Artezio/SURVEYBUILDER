import * as Models from '@art-forms/models';
import { ACTION } from '../constants/actions';
import { Action } from '../interfaces/Action';


const INITIAL_STATE: Models.IQuestionnaire | null = null;

export const questionnaire = (state: Models.IQuestionnaire | null = INITIAL_STATE, action: Action<ACTION, any>): Models.IQuestionnaire | null => {
    return state;
}