import * as Models from '@surveybuilder/models';

export interface ItemSettingsPanelProps {
    questionnaire: Models.Questionnaire;
    item: Models.Item;
    className?: string;
}

export default ItemSettingsPanelProps;