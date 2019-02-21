import { TextItem } from "@art-forms/models";


export interface QuestionnaireActions {
    addTextItem: (item: TextItem) => void;
}

export default QuestionnaireActions;