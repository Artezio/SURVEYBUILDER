import * as Models from '@art-forms/models';

export interface OpenChoiceProps {
    item: Models.OpenChoiceItem;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default OpenChoiceProps;