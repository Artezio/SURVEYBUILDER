import * as Models from "@art-forms/models";
import { Application } from "../Application";


export interface LayoutActions {
    createQuestionnaire(questionnaire?: Partial<Models.IQuestionnaire>): void;
    toggleModeToPlay(): void;
    toggleModeToDesign(): void;
}

export interface LayoutState {
    application: Application;
    questionnaireResponse: Models.IQuestionnaireResponse | null;
}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;