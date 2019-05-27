import * as Models from '@art-forms/models';


export interface QuestionTypeMenuProps {
    item: Models.QuestionItem<any>;
    title: string;
}

export interface QuestionTypeMenuOption {
    title: string;
    value: string;
}

export default QuestionTypeMenuProps;