import { TextItem, Questionnaire } from "@art-forms/models";
import { ADD_TEXT_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE } from "../constants/actions";
import { Action } from "./Action";


export type addTextItem = (textItem?: Omit<TextItem, 'id' | 'type'>) => Action<ADD_TEXT_ITEM, TextItem>;
export type setTitle = (title?: string) => Action<SET_TITLE, string | undefined>;
export type setDescription = (description?: string) => Action<SET_DESCRIPTION, string | undefined>;
export type updateQuestionnaire = (questionnaire: Partial<Questionnaire>) => Action<UPDATE_QUESTIONNAIRE, Partial<Questionnaire>>;

export interface QuestionnaireComponentActions {
    addTextItem: addTextItem;
    setTitle: setTitle;
    setDescription: setDescription;
    updateQuestionnaire: updateQuestionnaire;
}

export interface QuestionnaireComponentState {
    questionnaire: Questionnaire;
}

export type QuestionnaireComponentProps = QuestionnaireComponentState & AssignToActions<QuestionnaireComponentActions>;
export default QuestionnaireComponentProps;