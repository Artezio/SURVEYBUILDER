import * as Models from '@art-forms/models';

export interface MultiChoiceOptionProps {
    option: Models.IMultiChoiceOption;
    item: Models.MultiChoiceItem;
    submitForm(): void;
    setTouched(field: string): void;
}

export default MultiChoiceOptionProps;