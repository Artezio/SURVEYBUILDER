import { Action } from "./Action";
import * as Models from "@art-forms/models";
import { ADD_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE, CREATE_QUESTIONNAIRE, ADD_TEXT_ITEM } from "../../constants/actions";


export type AddItem = (item?: Omit<Models.Item, 'id' | 'type'>) => Action<ADD_ITEM, Models.Item>;
export type SetTitle = (title?: string) => Action<SET_TITLE, string | undefined>;
export type SetDescription = (description?: string) => Action<SET_DESCRIPTION, string | undefined>;
export type UpdateQuestionnaire = (questionnaire: Partial<Models.Questionnaire>) => Action<UPDATE_QUESTIONNAIRE, Partial<Models.Questionnaire>>;
export type CreateQuestionnaire = (questionnaire?: Omit<Models.Questionnaire, 'id'>) => Action<CREATE_QUESTIONNAIRE, Models.Questionnaire>;
export type AddTextItem = (item?: Omit<Models.TextItem, 'id' | 'type'>) => Action<ADD_TEXT_ITEM, Models.TextItem>;