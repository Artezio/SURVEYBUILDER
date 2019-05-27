import * as Models from '@art-forms/models';

export interface ChoiceOptionProps {
    option: Models.AnswerOption;
    disabledOption?: boolean;
    customLabel?: string;
}

export default ChoiceOptionProps;