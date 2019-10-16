import * as React from 'react';
import { OpenChoiceItemProps } from '../../interfaces/components/questionItems/OpenChoiceItemProps';
import * as Models from '@art-forms/models';
import { useObservableModel } from '../../observableConnector/useObservableModel';
import ChoiceOption from '../ChoiceOption';
import { Form, RadioGroup } from 'informed';
import QuestionItem from './QuestionItem';
import { ChoiceOptionOther } from '../ChoiceOptionOther';


export class OpenChoiceItem extends QuestionItem<OpenChoiceItemProps> {
    answerOptionFactory: Models.AnswerOptionFactory = new Models.AnswerOptionFactory(this.props.item);

    reset() {
        const { item } = this.props;
        item.clearInitialAnswers();
    }

    addOption() {
        const { item } = this.props;
        item.addAnswerOption(this.answerOptionFactory.createAnswerOption());
    }

    renderChoiceOptions() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <div className="option-list">
            <Form getApi={this.getFormApi.bind(this)} onSubmit={this.handleSubmit.bind(this)}>
                <RadioGroup initialValue={initialValue} field="value">
                    {item.options.map((option, i) => {
                        if (i === (item.options.length - 1)) {
                            return <ChoiceOptionOther key={option.id} option={option} />
                        }
                        return <ChoiceOption key={option.id} option={option} />
                    })}
                </RadioGroup>
            </Form>
        </div>
    }

    render() {
        return <div>
            <button className="btn btn-link text-secondary pl-0" onClick={this.reset.bind(this)}>
                Remove default value <i className="fas fa-undo"></i>
            </button>
            {this.renderChoiceOptions()}
            <div>
                <button className="btn btn-outline-secondary btn-block" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<OpenChoiceItemProps>(OpenChoiceItem);