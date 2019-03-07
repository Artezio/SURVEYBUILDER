import * as Models from "@art-forms/models";
import { createQuestionnaire } from "../../actions/questionnaire";
import { toggleAppModeToPlay } from "../../actions/application";
import { QuestionnaireActions } from "./QuestionnaireProps";


export interface LayoutActions extends QuestionnaireActions {
    createQuestionnaire: typeof createQuestionnaire;
    toggleAppModeToPlayer: typeof toggleAppModeToPlay;
}

export interface LayoutState {
    questionnaire: Models.Questionnaire | null;
}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;