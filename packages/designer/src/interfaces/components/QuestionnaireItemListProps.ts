import * as Models from '@artezio/models';


export interface QuestionnaireItemListProps {
    nestingLevel: string;
    className?: string;
    itemList: Models.Item[];
    subscribe?: () => void;
    isItemActive?: boolean;
}

export default QuestionnaireItemListProps;