import { QuestionnaireState } from "./Questionnaire";
import { toggleAppModeToDesign } from "../../actions/application";

export interface LayoutState extends QuestionnaireState {

}

export interface LayoutActions {
    toggleAppModeToDesign: typeof toggleAppModeToDesign
}

export type LayoutProps = AssignToActions<LayoutActions> & LayoutState;

export default LayoutProps;