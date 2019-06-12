import * as React from 'react';
import { ChoiceItemProps } from '../../interfaces/components/questionItems/ChoiceItemProps';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import ChoiceOption from '../ChoiceOption';
import { Form, RadioGroup } from 'informed';
import QuestionItem from './QuestionItem';


export class ChoiceItem extends QuestionItem<ChoiceItemProps> {
    answerOptionFactory: Models.AnswerOptionFactory = new Models.AnswerOptionFactory(this.props.item);

    reset() {
        const { item } = this.props;
        item.clearInitialAnswers();
    }

    addOption() {
        const { item } = this.props;
        item.addOption(this.answerOptionFactory.createAnswerOption({ value: 'Option ' + (item.options.length + 1) }));
    }

    renderChoiceOptions() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <div className="option-list">
            <Form getApi={this.getFormApi.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <RadioGroup initialValue={initialValue} field="value">
                    {item.options.map(option => <ChoiceOption key={option.id} option={option} />)}
                </RadioGroup>
            </Form>
        </div>
    }

    render() {
        return <div>
            {/* <button className="btn btn-link text-secondary" onClick={this.reset.bind(this)}>
                Reset <i className="fas fa-undo small"></i>
            </button> */}
            {this.renderChoiceOptions()}
            <div>
                <button className="btn btn-outline-secondary form-control" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<ChoiceItemProps>(ChoiceItem);