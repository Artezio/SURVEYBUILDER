import * as Models from '@art-forms/models';

export interface EnableConditionsProps {
    questionnaire: Models.Questionnaire;
    item: Models.Item;
    closeEnableWhenFrame: () => void;
}

export default EnableConditionsProps;