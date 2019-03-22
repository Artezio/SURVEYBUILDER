import * as Models from '@art-forms/models';
import { Application } from './Application';


export interface Store {
    questionnaire: Models.IQuestionnaire | null;
    application: Application;
    questionnaireResponse: Models.IQuestionnaireResponse | null;
}