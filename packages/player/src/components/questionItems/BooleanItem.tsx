import * as React from 'react';
import { Form, RadioGroup, Radio, FormApi } from 'informed';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import BooleanItemProps from '../../interfaces/components/questionItems/BooleanItemProps';


export class BooleanItem extends React.Component<BooleanItemProps> {
    formApi!: FormApi<Models.IAnswer<boolean>>;

    submitForm() {
        if (!this.formApi) return;
        this.formApi.submitForm();
    }

    getFormApi(formApi: FormApi<Models.IAnswer<boolean>>) {
        this.formApi = formApi;
    }

    handleSubmit(values: Partial<Models.IAnswer<boolean>>) {
        const { questionnaireResponseItem } = this.props;
        const answer = questionnaireResponseItem.answers[0];
        answer && answer.updateAnswer({ ...answer, ...values })
    }

    render() {
        const { item } = this.props;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="value" initialValue={item.initialValue}>
                <div className="form-group">
                    <div className="form-check">
                        <Radio className="form-check-input" id={`${item.id}-true`} value={true} onChange={this.submitForm.bind(this)} />
                        <label className="form-check-label" htmlFor={`${item.id}-true`}>Yes</label>
                    </div>
                    <div className="form-check">
                        <Radio className="form-check-input" id={`${item.id}-false`} value={false} onChange={this.submitForm.bind(this)} />
                        <label className="form-check-label" htmlFor={`${item.id}-false`}>No</label>
                    </div>
                </div>
            </RadioGroup>
        </Form>
    }
}

export default useObservableModel<BooleanItemProps>(BooleanItem);