import * as Models from '@artezio/models';
import { FormApi, FormState } from 'informed';


export interface MultiChoiceItemOptionProps {
    option: Models.IAnswerOption;
    questionnaireResponseItem: Models.QuestionnaireResponseItem;
    formApi: FormApi<FormState>;
    item: Models.IMultiChoiceItem;
    validationStatus?: string;
}

export default MultiChoiceItemOptionProps;