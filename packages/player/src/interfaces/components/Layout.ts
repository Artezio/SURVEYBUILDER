import { QuestionnaireState } from "./Questionnaire";

export interface LayoutState extends QuestionnaireState {

}

export interface LayoutActions {
    toggleAppModeToDesign(): any
}

export type LayoutProps = AssignToActions<LayoutActions> & LayoutState;

export default LayoutProps;