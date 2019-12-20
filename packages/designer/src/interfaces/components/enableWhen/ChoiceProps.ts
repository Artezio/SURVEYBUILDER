import * as Models from '@artezio/models';

export interface ChoiceProps {
    item: Models.IChoiceItem | Models.IMultiChoiceItem;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default ChoiceProps;