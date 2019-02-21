import { ADD_TEXT_ITEM, CREATE_QUESTIONNAIRE, SET_TITLE, SET_DESCRIPTION, REMOVE_ITEM } from '../constants/actions';
import { TextItem, Questionnaire, DisplayItem } from "@art-forms/models";
import { actionCreator } from './helpers';

export const createQuestionnaire = actionCreator<CREATE_QUESTIONNAIRE, Questionnaire>(CREATE_QUESTIONNAIRE);
export const setTitle = actionCreator<SET_TITLE, string>(SET_TITLE);
export const setDescription = actionCreator<SET_DESCRIPTION, string>(SET_DESCRIPTION);
export const addTextItem = actionCreator<ADD_TEXT_ITEM, TextItem>(ADD_TEXT_ITEM);
export const removeItem = actionCreator<REMOVE_ITEM, DisplayItem>(REMOVE_ITEM);