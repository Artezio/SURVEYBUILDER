import * as Models from "@art-forms/models";
import { ItemActions } from "./ItemProps";
import { AddItem, SetTitle, SetDescription, UpdateQuestionnaire, AddTextItem } from "../actions/Questionnaire";


export interface QuestionnaireActions extends ItemActions {
    addItem: AddItem;
    addTextItem: AddTextItem
    setTitle: SetTitle;
    setDescription: SetDescription;
    updateQuestionnaire: UpdateQuestionnaire;
}

export interface QuestionnaireState {
    questionnaire: Models.Questionnaire;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;

export default QuestionnaireProps;