import * as React from 'react';
import { Form, RadioGroup, Radio } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import ChoiceItemProps from '../../interfaces/components/questionItems/ChoiceItemProps';
import QuestionItem from './QuestionItem';


export class ChoiceItem extends QuestionItem<ChoiceItemProps> {
    answerFactory: Models.AnswerFactory;

    constructor(props: ChoiceItemProps) {
        super(props);
        this.answerFactory = new Models.AnswerFactory(props.questionnaireResponseItem);
        props.questionnaireResponseItem.answers.length === 0 && props.questionnaireResponseItem.answers.push(this.answerFactory.createAnswer());
    }

    handleSubmit(values: Partial<Models.IAnswer<any>>) {
        const { questionnaireResponseItem, item } = this.props;
        const option = item.options.find(x => x.id === values.value);
        const value = option && option.value;
        questionnaireResponseItem.reply(value);
    }

    renderChoiceOptions() {
        const { item, questionnaireResponseItem } = this.props;
        const initialValue = questionnaireResponseItem.answers[0] && questionnaireResponseItem.answers[0].id;
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="id" initialValue={initialValue}>
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