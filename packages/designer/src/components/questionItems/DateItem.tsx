import * as React from 'react';
import { DateItemProps } from '../../interfaces/components/questionItems/DateItemProps';
import { Form, Text } from 'informed';
import { useObservableModel } from '@art-forms/observable-react';
import QuestionItem from './QuestionItem';


export class DateItem extends QuestionItem<DateItemProps> {

    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor={`${item.id}-initial`} className="question-item-label">Default answer</label>
            <Text autoComplete="off" className="form-control" type="date" initialValue={initialValue} field="value" id={`${item.id}-initial`} onBlur={this.submitForm.bind(this)} />
        </Form>
    }
}

export default useObservableModel<DateItemProps>(DateItem);