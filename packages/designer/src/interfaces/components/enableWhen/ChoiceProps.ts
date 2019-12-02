import * as Models from '@surveybuilder/models';

export interface ChoiceProps {
    item: Models.IChoiceItem | Models.IMultiChoiceItem;
    index: number;
    enableWhen: Models.IEnableWhen;
}

export default ChoiceProps;