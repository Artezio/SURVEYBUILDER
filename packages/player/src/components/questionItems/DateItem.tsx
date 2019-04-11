import * as React from 'react';
import { Form, Text, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import QuestionItemProps from '../../interfaces/components/QuestionItemProps';


export class DateItem extends React.Component<QuestionItemProps<string>> {
    formApi!: FormApi<Models.IQuestionnaireResponseItem>;

    constructor(props: QuestionItemProps<string>) {
        super(props);
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IQuestionnaireResponseItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IQuestionnaireResponseItem>) {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem && questionnaireResponseItem.updateQuestionnaireResponseItem({ ...questionnaireResponseItem, ...values })
    }

    render() {
        const { item, className = '' } = this.props;
        return <div className={`mb-3 ${className}`}>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor={item.id} className="mb-1">{item.text}</label>
                    <Text id={item.id} type="date" className="form-control" field="value" initialValue={item.initialValue} onBlur={this.submitForm.bind(this)} />
                </div>
            </Form>
        </div>
    }
}

export default useObservableModel<QuestionItemProps<string>>(DateItem);