import * as React from 'react';
import { BooleanItemProps } from '../../interfaces/components/questionItems/BooleanItemProps';
import { Form, RadioGroup, Radio } from 'informed';
import { useObservableModel } from '@artezio/observable-react';
import QuestionItem from './QuestionItem';


export class BooleanItem extends QuestionItem<BooleanItemProps> {

    reset() {
        const { item } = this.props;
        item.clearInitialAnswers();
    }

    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="d-flex align-items-baseline">
                <label className="question-item-label mr-3 mb-0">Default answer</label>
                {item.initialAnswers.length > 0 && <button type="button" className="btn btn-link text-secondary p-0" onClick={this.reset.bind(this)}>
                    Remove default value
                    </button>}
            </div>
            <RadioGroup initialValue={initialValue} field="value">
                <div>
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