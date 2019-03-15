import * as Models from "@art-forms/models";
import { createQuestionnaire } from "../../actions/questionnaire";
import { toggleAppModeToPlay, toggleAppModeToDesign } from "../../actions/application";
import { QuestionnaireActions } from "./QuestionnaireProps";
import { Application } from "../Application";
import * as Player from '@art-forms/player';


export interface LayoutActions extends QuestionnaireActions, Player.QuestionnaireActions {
    createQuestionnaire: typeof createQuestionnaire;
    toggleAppModeToPlay: typeof toggleAppModeToPlay;
    toggleAppModeToDesign: typeof toggleAppModeToDesign;
}

export interface LayoutState {
    questionnaire: Models.Questionnaire | null;
    application: Application;
    questionnaireResponse: Models.QuestionnaireResponse | null;
}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;