import * as Models from '@art-forms/models';


export interface QuestionnaireItemListProps {
    nestingLevel: string;
    className?: string;
    item: Models.Questionnaire | Models.GroupItem;
    subscribe?: () => void;
}

export default QuestionnaireItemListProps;