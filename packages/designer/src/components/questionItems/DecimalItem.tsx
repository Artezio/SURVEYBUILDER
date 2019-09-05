import * as React from 'react';
import DecimalItemProps from '../../interfaces/components/questionItems/DecimalItemProps';
import { Form, Text } from 'informed';
import { useObservableModel } from '../../observableConnector/useObservableModel';
import QuestionItem from './QuestionItem';


export class DecimalItem extends QuestionItem<DecimalItemProps> {

    render() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label htmlFor={`${item.id}-initial`}>Default answer</label>
                <Text autoComplete="off" className="form-control" type="number" initialValue={initialValue} field="value" id={`${item.id}-initial`} placeholder="Patient default answer" onBlur={this.submitForm.bind(this)} />
            </div>
        </Form>
    }
}

export default useObservableModel<DecimalItemProps>(DecimalItem);