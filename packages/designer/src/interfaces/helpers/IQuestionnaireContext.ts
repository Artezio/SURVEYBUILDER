import * as Models from '@art-forms/models';
import SETTINGS_DISPLAY_MODE from '../../constants/questionnaireDesigner';

export interface IQuestionnaireContext {
    questionnaire?: Models.Questionnaire;
    selectTargetItem?: (item: Models.Item) => void;
    targetItem?: Models.Item;
    settingsDisplayMode: SETTINGS_DISPLAY_MODE;
    clearTargetItem?: (item: Models.Item) => void;
}