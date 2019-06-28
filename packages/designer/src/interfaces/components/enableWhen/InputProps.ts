import * as Models from '@art-forms/models';

export interface InputProps {
    type: string;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default InputProps;