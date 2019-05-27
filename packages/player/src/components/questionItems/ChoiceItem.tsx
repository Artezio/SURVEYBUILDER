import * as React from 'react';
import { Form, RadioGroup, Radio } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import ChoiceItemProps from '../../interfaces/components/questionItems/ChoiceItemProps';
import QuestionItem from './QuestionItem';


export class ChoiceItem extends QuestionItem<ChoiceItemProps> {

    handleSubmit(values: Partial<Models.IAnswer<any>>) {
        const { questionnaireResponseItem, item } = this.props;
        const option = item.options.find(x => x.id === values.value);
        const value = option && option.value;
        const answer = questionnaireResponseItem.answers[0];
        answer && answer.updateAnswer({ ...answer, value });
    }

    renderChoiceOptions() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="value" initialValue={initialValue}>
                {item.options.map(option => {
                    return <div className="form-check" key={option.id}>
                        <Radio className="form-check-input" id={option.id} value={option.id} onChange={this.submitForm.bind(this)} />
                        <label className="form-check-label" htmlFor={option.id}>{option.value}</label>
                    </div>
                })}
            </RadioGroup>
        </Form>
    }

    render() {
        return <div className="form-group">
            {this.renderChoiceOptions()}
        </div>
    }
}

export default useObservableModel<ChoiceItemProps>(ChoiceItem);