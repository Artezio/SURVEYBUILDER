import * as Models from '@art-forms/models';


export interface QuestionTypeMenuProps {
    item: Models.Item;
    title: string;
}

export interface QuestionTypeMenuOption {
    title: string;
    value: string;
}

export default QuestionTypeMenuProps;