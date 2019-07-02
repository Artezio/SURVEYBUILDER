import * as React from 'react';
import { Select, Option, FormState, withFormApi, Text } from 'informed';
import OpenChoiceProps from '../../interfaces/components/enableWhen/OpenChoiceProps';


export class OpenChoice extends React.Component<OpenChoiceProps> {
    otherAnswerInputRef: React.RefObject<HTMLInputElement> = React.createRef();
    initialOtherOptionValue?: any;

    constructor(props: OpenChoiceProps) {
        super(props);
        if (props.item.options.every(option => option.value !== props.enableWhen.answer) && props.item.options.length !== 0) {
            this.initialOtherOptionValue = props.enableWhen.answer;
            this.toggleToOtherOption();
        }
    }

    onChange() {
        const { enableWhen, formApi, index, item } = this.props;
        let isOtherOptionSelected: boolean = false;
        const optionId = formApi.getValue(`${index}][answer`);
        const option = item.options.find((option, i) => {
            if (option.id === optionId) {
                if (i === item.options.length - 1) {
                    isOtherOptionSelected = true;
                }
                return true;
            }
            return false;
        });
        if (isOtherOptionSelected) {
            this.toggleToOtherOption();
        } else {
            this.toggleToOptions();
            if (option) {
                enableWhen.answer = option.value;
            }
        }
    }

    toggleToOptions() {
        if (this.otherAnswerInputRef.current && !this.otherAnswerInputRef.current.disabled) {
            this.otherAnswerInputRef.current.disabled = true;
        }
    }

    toggleToOtherOption() {
        if (this.otherAnswerInputRef.current && this.otherAnswerInputRef.current.disabled) {
            this.otherAnswerInputRef.current.disabled = false;
        }
        this.onBlur();
    }

    onBlur() {
        const { enableWhen } = this.props;
        if (this.otherAnswerInputRef.current) {
            enableWhen.answer = this.otherAnswerInputRef.current.value;
        }
    }

    render() {
        const { item, index } = this.props;
        return <div className="row">
            <div>
                <Select className="custom-select" field={`${index}][answer`} onChange={this.onChange.bind(this)}>
                    <Option value="" disabled={true}>Select answer</Option>
                    {item.options.map((option, i) => <Option key={i} value={option.id}>{i === item.options.length - 1 ? 'Other' : option.value}</Option>)}
                </Select>
            </div>
            <div>
                <Text field={`${index}][answer-other`}
                    className="form-control"
                    forwardedRef={this.otherAnswerInputRef}
                    disabled={!this.initialOtherOptionValue}
                    onBlur={this.onBlur.bind(this)}
                    initialValue={this.initialOtherOptionValue}
                />
            </div>
        </div>
    }
}

export default withFormApi<Omit<OpenChoiceProps, 'formApi'>, FormState>(OpenChoice);