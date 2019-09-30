import * as React from 'react';
import MultiChoiceItemOptionProps from '../interfaces/components/MultiChoiceItemOptionProps';
import { Checkbox } from 'informed';

export class MultiChoiceItemOption extends React.Component<MultiChoiceItemOptionProps> {
    initialChecked?: boolean;

    constructor(props: MultiChoiceItemOptionProps) {
        super(props);
        props.questionnaireResponseItem.answers.find(answer => {
            if (answer.id === props.option.id) {
                this.initialChecked = true;
                return true;
            }
            return false;
        })

    }

    onChange() {
        const { option, questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(option.id)
    }

    validate() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.validate();
        const errorMessages = questionnaireResponseItem.errorMessages.join(' ');
        return errorMessages === '' ? undefined : errorMessages;
    }

    render() {
        const { option, validationStatus } = this.props;
        return <div className="form-check">
            <Checkbox className={`form-check-input ${validationStatus}`}
                field={option.id}
                id={`${option.id}-checkbox`}
                onChange={this.onChange.bind(this)}
                validateOnChange={true}
                validate={this.validate.bind(this)}
                initialValue={this.initialChecked}
            />
            <label className="form-check-label" htmlFor={`${option.id}-checkbox`}>{option.value}</label>
        </div>
    }
}

export default MultiChoiceItemOption;