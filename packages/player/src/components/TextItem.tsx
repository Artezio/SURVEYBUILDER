import * as React from 'react';
import { TextItemProps } from '../interfaces/componentProps/TextItem';
import { Form, Text, FormApi } from 'informed';
import * as Models from '@art-forms/models';


export class TextItem extends React.Component<TextItemProps> {
    formApi!: FormApi<Models.TextItem>;

    componentDidMount() {
        const { actions, item } = this.props;
        actions.addQuestionnaireResponseItem({ id: item.id, value: (item.value || item.initialValue) });
    }

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.TextItem>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.TextItem>) {
        const { actions, item } = this.props;
        actions.updateQuestionnaireResponseItem({ id: item.id, value: values.value })
    }

    render() {
        const { item } = this.props;
        return <div className="col-11 border border-info py-1">
            <p>{item.text}</p>
            <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <Text className="form-control" field="value" initialValue={item.initialValue} onBlur={this.submitForm.bind(this)} />
                </div>
            </Form>
        </div>
    }
}

export default TextItem;