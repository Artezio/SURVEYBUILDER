import * as React from 'react';
import { OpenChoiceItemProps } from '../../interfaces/components/questionItems/OpenChoiceItemProps';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import ChoiceOption from '../ChoiceOption';
import { Form, RadioGroup } from 'informed';
import QuestionItem from './QuestionItem';


export class OpenChoiceItem extends QuestionItem<OpenChoiceItemProps> {
    answerOptionFactory: Models.AnswerOptionFactory = new Models.AnswerOptionFactory(this.props.item);

    reset() {
        const { item } = this.props;
        item.clearInitialAnswers();
    }

    addOption() {
        const { item } = this.props;
        item.addOption(this.answerOptionFactory.createAnswerOption());
    }

    renderChoiceOptions() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <div className="option-list">
            <Form getApi={this.getFormApi.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <RadioGroup initialValue={initialValue} field="value">
                    {item.options.map((option, i) => <ChoiceOption key={option.id} option={option}
                        disabledOption={i === (item.options.length - 1) ? true : false}
                        customLabel={i === (item.options.length - 1) ? 'Other' : undefined}
                    />)}
                </RadioGroup>
            </Form>
        </div>
    }

    render() {
        return <div>
            <button className="btn btn-link text-secondary" onClick={this.reset.bind(this)}>
                Reset <i className="fas fa-undo small"></i>
            </button>
            {this.renderChoiceOptions()}
            <div>
                <button className="btn btn-outline-secondary form-control" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<OpenChoiceItemProps>(OpenChoiceItem);