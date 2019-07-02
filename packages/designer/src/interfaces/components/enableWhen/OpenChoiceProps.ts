import * as Models from '@art-forms/models';
import { FormState, FormApi } from 'informed';

export interface OpenChoiceProps {
    item: Models.OpenChoiceItem;
    index: number;
    enableWhen: Models.IEnableWhen;
    formApi: FormApi<FormState>;
}

export default OpenChoiceProps;