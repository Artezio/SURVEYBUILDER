import * as Models from '@art-forms/models';


export interface QuestionnaireItemListProps {
    nestingLevel: string;
    className?: string;
    itemList: Models.Item[];
    subscribe?: () => void;
    isItemActive?: boolean;
}

export default QuestionnaireItemListProps;