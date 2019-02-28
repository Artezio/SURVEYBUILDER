import * as Models from "@art-forms/models";
import { DisplayItemActions } from "./DisplayItemProps";
import { AddDisplayItem, SetTitle, SetDescription, UpdateQuestionnaire } from "../actions/QuestionnaireActions";


export interface QuestionnaireActions extends DisplayItemActions {
    addDisplayItem: AddDisplayItem;
    setTitle: SetTitle;
    setDescription: SetDescription;
    updateQuestionnaire: UpdateQuestionnaire;
}

export interface QuestionnaireState {
    questionnaire: Models.Questionnaire;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;

export default QuestionnaireProps;