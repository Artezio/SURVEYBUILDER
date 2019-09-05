import * as Models from '@art-forms/models';

export interface ChoiceProps {
    item: Models.IChoiceItem | Models.IMultiChoiceItem;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default ChoiceProps;