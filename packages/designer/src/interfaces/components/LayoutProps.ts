import * as Models from "@art-forms/models";
import { QuestionnaireActions } from "./QuestionnaireProps";
import { Application } from "../Application";
import * as Player from '@art-forms/player';


export interface LayoutActions extends QuestionnaireActions, Player.QuestionnaireActions {
    createQuestionnaire(questionnaire?: Partial<Models.Questionnaire>): void;
    toggleAppModeToPlay(): void;
    toggleAppModeToDesign(): void;
}

export interface LayoutState {
    questionnaire: Models.Questionnaire | null;
    application: Application;
    questionnaireResponse: Models.QuestionnaireResponse | null;
}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;