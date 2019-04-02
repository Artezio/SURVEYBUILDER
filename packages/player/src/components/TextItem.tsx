import * as React from 'react';
import { TextItemProps } from '../interfaces/components/TextItemProps';
import { Form, Text, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../HOCs/useObservableModel';


export class TextItem extends React.Component<TextItemProps> {
    formApi!: FormApi<Models.IQuestionnaireResponseItem>;

    constructor(props: TextItemProps) {
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
        const { item } = this.props;
        return <div className="mb-3">
            <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                <label htmlFor="string-answer" className="">{item.text}</label>
                    <Text id="string-answer" className="form-control" field="value" initialValue={item.initialValue} onBlur={this.submitForm.bind(this)} />
                </div>
            </Form>
        </div>
    }
}

export default useObservableModel<TextItemProps>(TextItem);