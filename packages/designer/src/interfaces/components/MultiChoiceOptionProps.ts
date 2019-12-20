import * as Models from '@artezio/models';

export interface MultiChoiceOptionProps {
    option: Models.AnswerOption;
    item: Models.MultiChoiceItem;
    disabledOption?: boolean;
    customLabel?: string;
}

export default MultiChoiceOptionProps;