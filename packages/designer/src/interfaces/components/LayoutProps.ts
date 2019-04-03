import * as Models from "@art-forms/models";
import { CreateQuestionnaire } from "../actions/Questionnaire";


export interface LayoutActions {
    createQuestionnaire: CreateQuestionnaire;
}

export interface LayoutState {
    questionnaire: Models.Questionnaire | null;
}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;