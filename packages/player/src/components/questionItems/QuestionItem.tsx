import * as React from 'react';
import * as Models from '@art-forms/models';
import { FormApi } from 'informed';


export abstract class QuestionItem<T> extends React.Component<T> {
    formApi!: FormApi<Models.IAnswer<any>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IAnswer<any>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IAnswer<any>>) {
        const { questionnaireResponseItem } = this.props as any;
        const answer = questionnaireResponseItem.answers[0];
        answer && answer.setValue(values.value);
    }
}

export default QuestionItem;