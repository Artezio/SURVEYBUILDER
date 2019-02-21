import { ADD_TEXT_ITEM, CREATE_QUESTIONNAIRE, SET_DESCRIPTIONS, SET_TITLE, SET_DESCRIPTION } from '../constants/actions';
import { TextItem, Questionnaire } from "@art-forms/models";
import { actionCreator } from './helpers';

export const createQuestionnaire = actionCreator<CREATE_QUESTIONNAIRE, Questionnaire>(CREATE_QUESTIONNAIRE);
export const setTitle = actionCreator<SET_TITLE, string>(SET_TITLE);
export const setDescription = actionCreator<SET_DESCRIPTIONS, string>(SET_DESCRIPTION);
export const addTextItem = actionCreator<ADD_TEXT_ITEM, TextItem>(ADD_TEXT_ITEM);