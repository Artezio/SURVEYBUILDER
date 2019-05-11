import * as React from 'react';
import { Form, TextArea, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import TextItemProps from '../../interfaces/components/questionItems/TextItemProps';


export class TextItem extends React.Component<TextItemProps> {
    formApi!: FormApi<Models.IAnswer<string>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IAnswer<string>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IAnswer<string>>) {
        const { questionnaireResponseItem } = this.props;
        const answer = questionnaireResponseItem.answers[0];
        answer && answer.updateAnswer({ ...answer, ...values })
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <TextArea autoComplete="off" id={item.id} className="form-control" field="value" initialValue={item.initialValue} onBlur={this.submitForm.bind(this)} />
            </div>
        </Form>
    }
}

export default useObservableModel<TextItemProps>(TextItem);