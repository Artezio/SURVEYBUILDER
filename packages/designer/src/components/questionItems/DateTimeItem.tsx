import * as React from 'react';
import { DateTimeItemProps } from '../../interfaces/components/questionItems/DateTimeItemProps';
import { Form, Text } from 'informed';
import { useObservableModel } from '@surveybuilder/observable-react';
import QuestionItem from './QuestionItem';


export class DateTimeItem extends QuestionItem<DateTimeItemProps> {

    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor={`${item.id}-initial`} className="question-item-label">Default answer</label>
            <Text autoComplete="off" className="form-control" type="datetime-local" initialValue={initialValue} field="value" id={`${item.id}-initial`} onBlur={this.submitForm.bind(this)} />
        </Form>
    }
}

export default useObservableModel<DateTimeItemProps>(DateTimeItem);