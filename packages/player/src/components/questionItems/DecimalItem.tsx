import * as React from 'react';
import { Form, Text, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import DecimalItemProps from '../../interfaces/components/questionItems/DecimalItemProps';


export class DecimalItem extends React.Component<DecimalItemProps> {
    formApi!: FormApi<Models.IAnswer<number>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IAnswer<number>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IAnswer<number>>) {
        const { questionnaireResponseItem } = this.props;
        const answer = questionnaireResponseItem.answers[0];
        answer && answer.updateAnswer({ ...answer, ...values })
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <Text autoComplete="off" id={item.id} type="number" className="form-control" field="value" initialValue={item.initialValue} onBlur={this.submitForm.bind(this)} />
            </div>
        </Form>
    }
}

export default useObservableModel<DecimalItemProps>(DecimalItem);