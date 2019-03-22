import * as Models from "@art-forms/models";
import { ItemActions } from "./ItemProps";
import { TextItemActions } from "./TextItemProps";


export interface QuestionnaireActions extends ItemActions, TextItemActions {
    addItem(item?: Partial<Models.IItem>): void;
    addTextItem(item?: Partial<Models.ITextItem>): void
    setTitle(title: string): void;
    setDescription(description: string): void;
    updateQuestionnaire(questionnaire: Partial<Models.IQuestionnaire>): void;
}

export interface QuestionnaireState {
    questionnaire: Models.IQuestionnaire;
    className?: string;
}

export type QuestionnaireProps = QuestionnaireState & AssignToActions<QuestionnaireActions>;

export default QuestionnaireProps;