import * as Models from '@art-forms/models';

export interface ChoiceOptionProps {
    option: Models.IChoiceOption;
    item: Models.ChoiceItem | Models.OpenChoiceItem;
    disabled?: boolean;
    submitForm(): void;
    reset(): void;
}

export default ChoiceOptionProps;