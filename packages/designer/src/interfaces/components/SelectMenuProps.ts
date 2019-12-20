import * as Models from '@artezio/models';


export interface QuestionTypeMenuProps {
    item: Models.QuestionItem<any>;
    title: string;
    selectTargetItem?: (item: Models.Item) => void;
}

export interface QuestionTypeMenuOption {
    title: string;
    value: string;
}

export default QuestionTypeMenuProps;