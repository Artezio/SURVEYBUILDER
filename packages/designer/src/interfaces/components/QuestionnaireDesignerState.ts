import { SETTINGS_DISPLAY } from '../../constants/questionnaireDesigner';
import * as Models from '@art-forms/models';

export interface QuestionnaireDesignerState {
    settingsDisplay: SETTINGS_DISPLAY;
    selectedItem?: Models.Item;
}