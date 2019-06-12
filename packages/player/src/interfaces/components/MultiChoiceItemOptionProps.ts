import * as Models from '@art-forms/models';
import { FormApi, FormState } from 'informed';


export interface MultiChoiceItemOptionProps {
    option: Models.AnswerOption;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    formApi: FormApi<FormState>;
    item: Models.MultiChoiceItem;
}

export default MultiChoiceItemOptionProps;