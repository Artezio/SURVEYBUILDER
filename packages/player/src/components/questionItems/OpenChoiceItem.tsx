import * as React from 'react';
import { Form, RadioGroup, Radio } from 'informed';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import OpenChoiceItemProps from '../../interfaces/components/questionItems/OpenChoiceItemProps';
import QuestionItem from './QuestionItem';


export class OpenChoiceItem extends QuestionItem<OpenChoiceItemProps> {
    otherAnswerInputRef: React.RefObject<HTMLInputElement> = React.createRef();
    otherAnswerRadioRef: React.RefObject<HTMLInputElement> = React.createRef();

    handleSubmit(values: Partial<Models.IAnswer<any>>) {
        const { questionnaireResponseItem, item } = this.props;
        const option = item.options.find(x => x.id === values.value);
        const value = option && option.value;
        const answer = questionnaireResponseItem.answers[0];
        answer.updateAnswer({ ...answer, value });
    }

    componentDidMount() {
        const { item, questionnaireResponseItem } = this.props;
        const otherOption = item.options[item.options.length - 1];
        if (item.initialAnswers[0] && item.initialAnswers[0].value === otherOption.id) {
            if (this.otherAnswerRadioRef.current) {
                this.otherAnswerRadioRef.current.checked = true;
                if (this.otherAnswerInputRef.current) {
                    this.otherAnswerInputRef.current.disabled = false;
                    this.otherAnswerInputRef.current.value = otherOption.value;
                    const answer = questionnaireResponseItem.answers[0];
                    answer.updateAnswer({ ...answer, value: otherOption.value })
                }
            }
        }
    }

    toggleToOptions() {
        this.submitForm();
        if (this.otherAnswerRadioRef.current && this.otherAnswerRadioRef.current.checked) {
            this.otherAnswerRadioRef.current.checked = false;
        }
        if (this.otherAnswerInputRef.current) {
            this.otherAnswerInputRef.current.disabled = true;
        }
    }

    toggleToOtherAnswer() {
        if (!this.otherAnswerRadioRef.current || !this.otherAnswerRadioRef.current.checked) {
            return;
        }
        if (this.otherAnswerInputRef.current) {
            this.otherAnswerInputRef.current.disabled = false;
            this.otherAnswerInputRef.current.focus();
            this.setOtherAnswer();
        }
    }

    setOtherAnswer() {
        const { questionnaireResponseItem, item } = this.props;
        const otherOption = item.options[item.options.length - 1];
        if (this.otherAnswerInputRef.current) {
            this.formApi.setValue('value', otherOption.id);
            const answer = questionnaireResponseItem.answers[0];
            answer.updateAnswer({ ...answer, value: this.otherAnswerInputRef.current.value });
        }
    }

    renderChoiceOptions() {
        const { item, questionnaireResponseItem } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        const answer = questionnaireResponseItem.answers[0];
        const otherOption = item.options[item.options.length - 1];
        return <Form getApi={this.getFormApi.bind(this)} key={item.id} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="value" initialValue={initialValue}>
                {item.options.map((option, i) => {
                    if (i !== item.options.length - 1) {
                        return <div className="form-check" key={`${option.id}-${answer.id}`}>
                            <Radio name="value" className="form-check-input" id={`${option.id}-${answer.id}`} value={option.id} onChange={this.toggleToOptions.bind(this)} />
                            <label className="form-check-label" htmlFor={`${option.id}-${answer.id}`}>{option.value}</label>
                        </div>
                    }
                })}
            </RadioGroup>
            <div className="form-check">
                <input type="radio" name="value" className="form-check-input" id={`${otherOption.id}-${answer.id}`} onChange={this.toggleToOtherAnswer.bind(this)} ref={this.otherAnswerRadioRef} />
                <label className="form-check-label" htmlFor={`${otherOption.id}-${answer.id}`}>Other</label>
            </div>
            <input autoComplete="off" name="value" className="form-control" onBlur={this.setOtherAnswer.bind(this)} disabled={true} ref={this.otherAnswerInputRef} />
        </Form>
    }

    render() {
        return <div className="form-group">
            {this.renderChoiceOptions()}
        </div>
    }
}

export default useObservableModel<OpenChoiceItemProps>(OpenChoiceItem);