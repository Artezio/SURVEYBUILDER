import * as React from 'react';
import SETTINGS_DISPLAY_MODE from '../constants/questionnaireDesigner';
import { IQuestionnaireContext } from '../interfaces/helpers/IQuestionnaireContext';


export const QuestionnaireContext = React.createContext<IQuestionnaireContext>({ settingsDisplayMode: SETTINGS_DISPLAY_MODE.rightPanel });
export default QuestionnaireContext;