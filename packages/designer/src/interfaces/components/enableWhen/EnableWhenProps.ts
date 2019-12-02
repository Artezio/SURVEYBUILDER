import * as Models from '@surveybuilder/models';
import { FormApi, FormState } from 'informed';

export interface EnableWhenProps {
    questionList: Models.IQuestionItem<any>[];
    enableWhen: Models.EnableWhen;
    index: number;
    formApi: FormApi<FormState>;
}

export default EnableWhenProps;