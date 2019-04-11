import * as Models from '@art-forms/models';

export interface ChoiceOptionProps {
    option: Models.IChoiceOption;
    item: Models.ChoiceItem | Models.OpenChoiceItem;
}

export default ChoiceOptionProps;