import * as Models from "@art-forms/models";
import { ItemActions } from "./ItemProps";
import { addItem, addTextItem, setTitle, setDescription, updateQuestionnaire } from "../../actions/questionnaire";


export interface QuestionnaireActions extends ItemActions {
    addItem: typeof addItem;
    addTextItem: typeof addTextItem
    setTitle: typeof setTitle;
    setDescription: typeof setDescription;
    updateQuestionnaire: typeof updateQuestionnaire;
}

export interface QuestionnaireState {
    questionnaire: Models.Questionnaire;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;

export default QuestionnaireProps;