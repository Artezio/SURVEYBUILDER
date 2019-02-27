import { DisplayItem, Questionnaire } from "@art-forms/models";
import { ADD_DISPLAY_ITEM, SET_TITLE, SET_DESCRIPTION, UPDATE_QUESTIONNAIRE } from "../constants/questionnaireActions";
import { Action } from "./Action";
import { DisplayItemComponentActions } from "./DisplayItemComponentProps";


export type AddDisplayItem = (displayItem?: Omit<DisplayItem, 'id' | 'type'>) => Action<ADD_DISPLAY_ITEM, DisplayItem>;
export type SetTitle = (title?: string) => Action<SET_TITLE, string | undefined>;
export type SetDescription = (description?: string) => Action<SET_DESCRIPTION, string | undefined>;
export type UpdateQuestionnaire = (questionnaire: Partial<Questionnaire>) => Action<UPDATE_QUESTIONNAIRE, Partial<Questionnaire>>;

export interface QuestionnaireComponentActions extends DisplayItemComponentActions {
    addDisplayItem: AddDisplayItem;
    setTitle: SetTitle;
    setDescription: SetDescription;
    updateQuestionnaire: UpdateQuestionnaire;
}

export interface QuestionnaireComponentState {
    questionnaire: Questionnaire;
}

export type QuestionnaireComponentProps = QuestionnaireComponentState & AssignToActions<QuestionnaireComponentActions>;
export default QuestionnaireComponentProps;