import * as React from 'react';
import * as Models from '@art-forms/models';
import { Form, RadioGroup, Radio, FormApi, Text } from 'informed';
import { useObservableModel } from '@art-forms/observable';
import OpenChoiceItemProps from '../../interfaces/components/questionItems/OpenChoiceItemProps';
import QuestionItem from './QuestionItem';


export class OpenChoiceItem extends QuestionItem<OpenChoiceItemProps> {
    otherAnswerInputRef: React.RefObject<HTMLInputElement> = React.createRef();
    otherAnswerRadioRef: React.RefObject<HTMLInputElement> = React.createRef();
    answerFactory: Models.AnswerFactory = new Models.AnswerFactory(this.props.questionnaireResponseItem);;
    formApiOther?: FormApi<Models.IAnswer<any>>;

    submitFormOther() {
        this.formApiOther && this.formApiOther.submitForm();
    }

    getFormApiOther(formApi: FormApi<Models.IAnswer<any>>) {
        this.formApiOther = formApi;
    }

    handleSubmitOther(values: Partial<Models.IAnswer<any>>) {
        const { questionnaireResponseItem, item } = this.props;
        questionnaireResponseItem.reply(values.value);
        const otherOption = item.options[item.options.length - 1];
        this.formApi && this.formApi.setValue('value', otherOption.id);
    }

    handleSubmit(values: Partial<Models.IAnswer<any>>) {
        const { questionnaireResponseItem, item } = this.props;
        const option = item.options.find(x => x.id === values.value);
        const value = option && option.value;
        questionnaireResponseItem.reply(value);
    }

    componentDidMount() {
        const { item } = this.props;
        const otherOption = item.options[item.options.length - 1];
        if (item.initialAnswers[0] && item.initialAnswers[0].value === otherOption.id && this.otherAnswerInputRef.current && this.otherAnswerRadioRef.current) {
            this.formApiOther && this.formApiOther.setValue('value', otherOption.value);
            this.otherAnswerRadioRef.current.click();
        }
    }

    toggleToOptions() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.setReplyStrategy(Models.choiceStrategy);
        this.submitForm();
        if (this.otherAnswerRadioRef.current && this.otherAnswerInputRef.current && this.otherAnswerRadioRef.current.checked) {
            this.otherAnswerRadioRef.current.checked = false;
            this.otherAnswerInputRef.current.disabled = true;
        }
    }

    toggleToOtherAnswer() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.setReplyStrategy(Models.textInputStrategy);
        if (this.otherAnswerRadioRef.current && this.otherAnswerRadioRef.current.checked && this.otherAnswerInputRef.current) {
            this.otherAnswerInputRef.current.disabled = false;
            this.otherAnswerInputRef.current.focus();
            this.submitFormOther();
        }
    }

    renderOptions() {
        const { item } = this.props;
        const initialValue = item.initialAnswers[0] && item.initialAnswers[0].value;
        return <Form getApi={this.getFormApi.bind(this)} key={`${item.id}-options`} onSubmit={this.handleSubmit.bind(this)}>
            <RadioGroup field="value" initialValue={initialValue}>
                {item.options.map((option, i) => {
                    if (i !== item.options.length - 1) {
                        return <div className="form-check" key={option.id}>
                            <Radio name="value" className="form-check-input" id={option.id} value={option.id} onChange={this.toggleToOptions.bind(this)} />
                            <label className="form-check-label" htmlFor={option.id}>{option.value}</label>
                        </div>
                    }
                })}
            </RadioGroup>
        </Form>
    }

    renderOtherOption() {
        const { item } = this.props;
        const otherOption = item.options[item.options.length - 1];
        return <>
            <div className="form-check">
                <input type="radio" name="value" className="form-check-input" id={otherOption.id} onChange={this.toggleToOtherAnswer.bind(this)} ref={this.otherAnswerRadioRef} />
                <label className="form-check-label" htmlFor={otherOption.id}>Other</label>
            </div>
            <Form getApi={this.getFormApiOther.bind(this)} key={`${item.id}-other`} onSubmit={this.handleSubmitOther.bind(this)}>
                <Text autoComplete="off" field="value" className="form-control" onBlur={this.submitFormOther.bind(this)} disabled={true} forwardedRef={this.otherAnswerInputRef} />
            </Form>
        </>
    }

    render() {
        return <div className="form-group">
            {this.renderOptions()}
            {this.renderOtherOption()}
        </div>
    }
}

export default useObservableModel<OpenChoiceItemProps>(OpenChoiceItem);