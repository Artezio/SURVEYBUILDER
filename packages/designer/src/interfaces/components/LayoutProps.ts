import * as Models from "@art-forms/models";
import { Application } from "../Application";


export interface LayoutActions {
    createQuestionnaire(questionnaire?: Partial<Models.IQuestionnaire>): void;
    toggleModeToPlay(questionnaire: Models.IQuestionnaire): void;
    toggleModeToDesign(): void;
}

export interface LayoutState {
    application: Application;
    questionnaire?: Models.Questionnaire;
    questionnaireResponse?: Models.QuestionnaireResponse;
}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;