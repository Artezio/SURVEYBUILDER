import * as React from 'react';
import { Form, RadioGroup, Radio } from 'informed';
import { useObservableModel } from '@art-forms/observable';
import BooleanItemProps from '../../interfaces/components/questionItems/BooleanItemProps';
import QuestionItem from './QuestionItem';


export class BooleanItem extends QuestionItem<BooleanItemProps> {
    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="value" initialValue={initialValue}>
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