import { APP_MODE } from "../constants/application";
import * as Models from '@art-forms/models';


export interface Application {
    mode: APP_MODE;
    questionnaire?: Models.Questionnaire;
    questionnaireResponse?: Models.QuestionnaireResponse;
}