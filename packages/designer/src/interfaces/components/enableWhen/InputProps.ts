import * as Models from '@surveybuilder/models';

export interface InputProps {
    type: string;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default InputProps;