import * as Models from '@surveybuilder/models';
import { FormState, FormApi } from 'informed';

export interface OpenChoiceProps {
    item: Models.IOpenChoiceItem;
    index: number;
    enableWhen: Models.IEnableWhen;
    formApi: FormApi<FormState>;
}

export default OpenChoiceProps;