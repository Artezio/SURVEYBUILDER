import { Questionnaire } from "@art-forms/models";

export interface LayoutActions {
    createQuestionnaire: (questionnaire: Questionnaire) => void;
}

export default LayoutActions;