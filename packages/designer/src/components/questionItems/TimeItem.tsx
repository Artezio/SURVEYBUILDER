import * as React from 'react';
import { TimeItemProps } from '../../interfaces/components/questionItems/TimeItemProps';
import { Form, Text } from 'informed';
import { useObservableModel } from '@artezio/observable-react';
import QuestionItem from './QuestionItem';


export class TimeItem extends QuestionItem<TimeItemProps> {
    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor={`${item.id}-initial`} className="question-item-label">Default answer</label>
            <Text autoComplete="off" className="form-control" type="time" initialValue={initialValue} field="value" id={`${item.id}-initial`} onBlur={this.submitForm.bind(this)} />
        </Form>
    }
}

export default useObservableModel<TimeItemProps>(TimeItem);