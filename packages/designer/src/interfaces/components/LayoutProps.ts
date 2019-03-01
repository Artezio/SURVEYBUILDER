import * as Models from "@art-forms/models";
import { createQuestionnaire } from "../../actions/questionnaire";


export interface LayoutActions {
    createQuestionnaire: typeof createQuestionnaire;
}

export interface LayoutState {
    questionnaire: Models.Questionnaire | null;
}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;