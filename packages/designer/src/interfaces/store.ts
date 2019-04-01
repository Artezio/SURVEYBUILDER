import * as Models from '@art-forms/models';
import { Application } from './Application';


export interface Store {
    questionnaire: Models.Questionnaire | undefined;
    application: Application;
    questionnaireResponse: Models.QuestionnaireResponse | undefined;
}