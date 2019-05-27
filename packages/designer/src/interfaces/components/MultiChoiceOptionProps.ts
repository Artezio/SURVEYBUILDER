import * as Models from '@art-forms/models';

export interface MultiChoiceOptionProps {
    option: Models.AnswerOption;
    item: Models.MultiChoiceItem;
    disabledOption?: boolean;
    customLabel?: string;
}

export default MultiChoiceOptionProps;