import * as React from 'react';
import * as Models from '@art-forms/models';
import SETTINGS_DISPLAY_MODE from '../constants/questionnaireDesigner';


interface IQuestionnaireContext {
    questionnaire?: Models.Questionnaire;
    selectTargetItem?: (item: Models.Item) => void;
    targetItem?: Models.Item;
    settingsDisplayMode: SETTINGS_DISPLAY_MODE;
}


export const QuestionnaireContext = React.createContext<IQuestionnaireContext>({});
export default QuestionnaireContext;