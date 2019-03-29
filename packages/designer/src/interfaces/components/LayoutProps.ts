import * as Models from "@art-forms/models";
import { Application } from "../Application";


export interface LayoutActions {
    createQuestionnaire(questionnaire?: Partial<Models.IQuestionnaire>): void;
    toggleModeToPlay(): void;
    toggleModeToDesign(): void;
    createQuestionnaireResponse(questionnaireResponse: Models.IQuestionnaireResponse): void;
}

export interface LayoutState {
    application: Application;
}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;