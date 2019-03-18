import { QuestionnaireState, QuestionnaireActions } from "./QuestionnaireProps";


export interface LayoutState extends QuestionnaireState {
    questionnaireResponse: any
}

export interface LayoutActions extends QuestionnaireActions {

}

export type LayoutProps = LayoutState & AssignToActions<LayoutActions>;

export default LayoutProps;