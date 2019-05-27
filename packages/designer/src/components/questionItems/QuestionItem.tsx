import * as React from 'react';
import * as Models from '@art-forms/models';
import { FormApi } from 'informed';
import QuestionItemProps from '../../interfaces/components/questionItems/QuestionItemProps';


export abstract class QuestionItem<T extends QuestionItemProps<any>> extends React.Component<T> {
    formApi?: FormApi<Models.IInitialAnswer<T>>;
    initialAnswerFactory: Models.initialAnswerFactory = new Models.initialAnswerFactory(this.props.item);

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IInitialAnswer<T>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IInitialAnswer<T>>) {
        const { item } = this.props;
        item.setSingleInitialAnswer(this.initialAnswerFactory.createInitialAnswer({ value: values.value }));
    }

    componentDidUpdate() {
        const { item } = this.props;
        const initialAnswerValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        this.formApi && this.formApi.setValue('value', initialAnswerValue);
    }
}

export default QuestionItem;