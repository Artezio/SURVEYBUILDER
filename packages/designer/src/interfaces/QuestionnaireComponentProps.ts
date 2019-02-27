import { DisplayItem, Questionnaire } from "@art-forms/models";
import { ADD_DISPLAY_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE } from "../constants/questionnaireActions";
import { Action } from "./Action";
import { DisplayItemComponentActions } from "./DisplayItemComponentProps";


export type addDisplayItem = (displayItem?: Omit<DisplayItem, 'id' | 'type'>) => Action<ADD_DISPLAY_ITEM, DisplayItem>;
export type setTitle = (title?: string) => Action<SET_TITLE, string | undefined>;
export type setDescription = (description?: string) => Action<SET_DESCRIPTION, string | undefined>;
export type updateQuestionnaire = (questionnaire: Partial<Questionnaire>) => Action<UPDATE_QUESTIONNAIRE, Partial<Questionnaire>>;

export interface QuestionnaireComponentActions extends DisplayItemComponentActions {
    addDisplayItem: addDisplayItem;
    setTitle: setTitle;
    setDescription: setDescription;
    updateQuestionnaire: updateQuestionnaire;
}

export interface QuestionnaireComponentState {
    questionnaire: Questionnaire;
}

export type QuestionnaireComponentProps = QuestionnaireComponentState & AssignToActions<QuestionnaireComponentActions>;
export default QuestionnaireComponentProps;