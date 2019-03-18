import * as Models from "@art-forms/models";
import { ItemActions } from "./ItemProps";
import { TextItemActions } from "./TextItemProps";


export interface QuestionnaireActions extends ItemActions, TextItemActions {
    addItem(item?: Partial<Models.Item>): void;
    addTextItem(item?: Partial<Models.TextItem>): void
    setTitle(title: string): void;
    setDescription(description: string): void;
    updateQuestionnaire(questionnaire: Partial<Models.Questionnaire>): void;
}

export interface QuestionnaireState {
    questionnaire: Models.Questionnaire;
    className?: string;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;

export default QuestionnaireProps;