import * as React from 'react';
import * as Models from '@art-forms/models';
import { RadioGroup, Radio, Text, withFormApi, FormState } from 'informed';
import { useObservableModel } from '@art-forms/observable';
import OpenChoiceItemProps from '../../interfaces/components/questionItems/OpenChoiceItemProps';
import ERROR_MESSAGES from '../../constants/errorMessages';


export class OpenChoiceItem extends React.PureComponent<OpenChoiceItemProps> {
    otherAnswerInputRef: React.RefObject<HTMLInputElement> = React.createRef();
    otherAnswerRadioRef: React.RefObject<HTMLInputElement> = React.createRef();

    toggleToOtherAnswer() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        formApi.setValue(item.id, undefined);
        questionnaireResponseItem.setReplyStrategy(Models.textInputStrategy);
        if (this.otherAnswerRadioRef.current && this.otherAnswerRadioRef.current.checked && this.otherAnswerInputRef.current) {
            this.otherAnswerInputRef.current.disabled = false;
            this.otherAnswerInputRef.current.focus();
        }
    }

    toggleToOptions() {
        const { questionnaireResponseItem, item, formApi } = this.props;
        questionnaireResponseItem.setReplyStrategy(Models.choiceStrategy);
        if (this.otherAnswerRadioRef.current && this.otherAnswerInputRef.current && this.otherAnswerRadioRef.current.checked) {
            this.otherAnswerRadioRef.current.checked = false;
            this.otherAnswerInputRef.current.disabled = true;
        }
        const option = item.options.find(x => x.id === formApi.getValue(item.id));
        option && questionnaireResponseItem.reply(option);
    }

    onBlurFromOtherOption() {
        const { questionnaireResponseItem, formApi, item } = this.props;
        const value = formApi.getValue(item.id + '-other');
        questionnaireResponseItem.reply(value);
    }

    validate() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.validate();
        const errorMessages = questionnaireResponseItem.errorMessages.join(' ');
        return errorMessages === '' ? undefined : errorMessages;
    }

    renderOptions() {
        const { item } = this.props;
        return <RadioGroup field={item.id} onChange={this.toggleToOptions.bind(this)} validateOnChange={true} validate={this.validate.bind(this)}>
            {item.options.map((option, i) => {
                if (i !== item.options.length - 1) {
                    return <div className="form-check" key={option.id}>
                        <Radio className="form-check-input" id={option.id} value={option.id} />
                        <label className="form-check-label" htmlFor={option.id}>{option.value}</label>
                    </div>
                }
            })}
        </RadioGroup>
    }

    renderOtherOption() {
        const { item } = this.props;
        const otherOption = item.options[item.options.length - 1];
        return <>
            <div className="form-check">
                <input type="radio" className="form-check-input" id={otherOption.id} onChange={this.toggleToOtherAnswer.bind(this)} ref={this.otherAnswerRadioRef} />
                <label className="form-check-label" htmlFor={otherOption.id}>Other</label>
            </div>
            <Text autoComplete="off"
                field={`${item.id}-other`}
                className="form-control"
                onBlur={this.onBlurFromOtherOption.bind(this)}
                disabled={true}
                forwardedRef={this.otherAnswerInputRef}
                validateOnChange={true}
                validate={this.validate.bind(this)}
            />
        </>
    }

    render() {
        return <div className="form-group">
            {this.renderOptions()}
            {this.renderOtherOption()}
        </div>
    }
}

export default withFormApi<OpenChoiceItemProps, FormState>(useObservableModel(OpenChoiceItem));