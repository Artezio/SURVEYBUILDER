import { TextItem, Questionnaire } from "@art-forms/models";
import { ADD_TEXT_ITEM } from "../constants/actions";
import { Action } from "./Action";


export type addTextItem = (textItem?: Omit<TextItem, 'id' | 'type'>) => Action<ADD_TEXT_ITEM, TextItem>;

export interface QuestionnaireComponentActions {
    addTextItem: addTextItem;
}

export interface QuestionnaireComponentState {
    questionnaire: Questionnaire;
}

export type QuestionnaireComponentProps = QuestionnaireComponentState & AssignToActions<QuestionnaireComponentActions>;
export default QuestionnaireComponentProps;