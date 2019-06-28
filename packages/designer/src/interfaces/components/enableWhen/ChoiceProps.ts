import * as Models from '@art-forms/models';

export interface ChoiceProps {
    item: Models.ChoiceItem | Models.MultiChoiceItem;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default ChoiceProps;