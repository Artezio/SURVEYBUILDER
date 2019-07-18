import * as React from 'react';
import * as Models from '@art-forms/models';
export const QuestionnaireContext = React.createContext({ questionnaire: undefined } as { questionnaire?: Models.Questionnaire });
export default QuestionnaireContext;