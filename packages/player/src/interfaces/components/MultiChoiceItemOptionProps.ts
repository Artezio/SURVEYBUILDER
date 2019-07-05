import * as Models from '@art-forms/models';
import { FormApi, FormState } from 'informed';


export interface MultiChoiceItemOptionProps {
    option: Models.IAnswerOption;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    formApi: FormApi<FormState>;
    item: Models.IMultiChoiceItem;
}

export default MultiChoiceItemOptionProps;