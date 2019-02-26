import { Questionnaire } from "@art-forms/models";
import { Action } from "./Action";
import { CREATE_QUESTIONNAIRE } from "../constants/questionnaireActions";


export type createQuestionnaire = (questionnaire?: Omit<Questionnaire, 'id'>) => Action<CREATE_QUESTIONNAIRE, Questionnaire>

export interface LayoutComponentActions {
    createQuestionnaire: createQuestionnaire;
}

export interface LayoutComponentState {
    questionnaire: Questionnaire | null;
}

export type LayoutComponentProps = LayoutComponentState & AssignToActions<LayoutComponentActions>;
export default LayoutComponentProps;