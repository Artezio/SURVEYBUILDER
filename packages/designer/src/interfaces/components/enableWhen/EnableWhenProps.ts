import * as Models from '@art-forms/models';
import { FormApi, FormState } from 'informed';

export interface EnableWhenProps {
    questionList: Models.QuestionItem<any>[];
    enableWhen: Models.EnableWhen;
    index: number;
    formApi: FormApi<FormState>;
}

export default EnableWhenProps;