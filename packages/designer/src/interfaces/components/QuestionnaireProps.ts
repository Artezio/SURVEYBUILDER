import * as Models from "@art-forms/models";
import { ItemActions } from "./ItemProps";
import { addItem, addTextItem, setTitle, setDescription, updateQuestionnaire } from "../../actions/questionnaire";
import { TextItemActions } from "./TextItemProps";


export interface QuestionnaireActions extends ItemActions, TextItemActions {
    addItem: typeof addItem;
    addTextItem: typeof addTextItem
    setTitle: typeof setTitle;
    setDescription: typeof setDescription;
    updateQuestionnaire: typeof updateQuestionnaire;
}

export interface QuestionnaireState {
    questionnaire: Models.Questionnaire;
    className?: string;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;

export default QuestionnaireProps;