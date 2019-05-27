import * as React from 'react';
import { Form, TextArea } from 'informed';
import { useObservableModel } from '@art-forms/observable';
import TextItemProps from '../../interfaces/components/questionItems/TextItemProps';
import QuestionItem from './QuestionItem';


export class TextItem extends QuestionItem<TextItemProps> {
    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <TextArea autoComplete="off" id={item.id} className="form-control" field="value" initialValue={initialValue} onBlur={this.submitForm.bind(this)} />
            </div>
        </Form>
    }
}

export default useObservableModel<TextItemProps>(TextItem);