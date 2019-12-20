import * as Models from '@artezio/models';
import SETTINGS_DISPLAY_MODE from '../../constants/questionnaireDesigner';

export interface IQuestionnaireContext {
    questionnaire?: Models.Questionnaire;
    selectTargetItem?: (item: Models.Item) => void;
    targetItemId?: string;
    settingsDisplayMode: SETTINGS_DISPLAY_MODE;
    clearTargetItem?: () => void;
    targetGroupId?: string;
}