import * as React from 'react';
import * as Models from '@art-forms/models';
import MultiChoiceItemOptionProps from '../interfaces/components/MultiChoiceItemOptionProps';
import { Checkbox } from 'informed';

export class MultiChoiceItemOption extends React.Component<MultiChoiceItemOptionProps> {
    answerFactory: Models.AnswerFactory = new Models.AnswerFactory(this.props.questionnaireResponseItem);
    answer?: Models.Answer<any> = this.props.questionnaireResponseItem.answers.find(answer => answer.id === this.props.option.id);

    onChange() {
        const { option, questionnaireResponseItem, formApi, item } = this.props;
        questionnaireResponseItem.reply([formApi.getValue(item.id + '.' + option.id), option])
    }

    validate() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.validate();
        const errorMessages = questionnaireResponseItem.errorMessages.join(' ');
        return errorMessages === '' ? undefined : errorMessages;
    }

    render() {
        const { option } = this.props;
        return <div className="form-check">
            <Checkbox className="form-check-input"
                field={option.id}
                id={`${option.id}-checkbox`}
                onChange={this.onChange.bind(this)}
                validateOnChange={true}
                validate={this.validate.bind(this)}
            />
            <label htmlFor={`${option.id}-checkbox`}>{option.value}</label>
        </div>
    }
}

export default MultiChoiceItemOption;