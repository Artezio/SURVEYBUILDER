import { SETTINGS_DISPLAY_MODE } from '../../constants/questionnaireDesigner';
import * as Models from '@art-forms/models';

export interface QuestionnaireDesignerState {
    settingsDisplayModel: SETTINGS_DISPLAY_MODE;
    targetItem?: Models.Item;
    targetGroup?: Models.IItemCollection;
}