import * as Models from '@artezio/models';

export interface InputProps {
    type: string;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default InputProps;