import * as React from 'react';
import StringItemProps from '../../interfaces/components/questionItems/StringItemProps';
import { Form, Text } from 'informed';
import { useObservableModel } from '@art-forms/observable-react';
import QuestionItem from './QuestionItem';


export class StringItem extends QuestionItem<StringItemProps> {

    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor={`${item.id}-initial`} className="question-item-label">Default answer</label>
            <Text autoComplete="off" className="form-control" initialValue={initialValue} field="value" id={`${item.id}-initial`} placeholder="Patient default answer" onBlur={this.submitForm.bind(this)} />
        </Form>
    }
}

export default useObservableModel<StringItemProps>(StringItem);