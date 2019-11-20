import * as React from 'react';
import TextItemProps from '../../interfaces/components/questionItems/TextItemProps';
import { Form, TextArea } from 'informed';
import { useObservableModel } from '@art-forms/observable-react';
import QuestionItem from './QuestionItem';


export class TextItem extends QuestionItem<TextItemProps> {

    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <label htmlFor={`${item.id}-initial`} className="question-item-label">Default answer</label>
            <TextArea autoComplete="off" className="form-control js-text-area" initialValue={initialValue} field="value" id={`${item.id}-initial`} placeholder="Patient default answer" onBlur={this.submitForm.bind(this)} />
        </Form>
    }
}

export default useObservableModel<TextItemProps>(TextItem);