import * as React from 'react';
import { RadioGroup, Radio, FormState, withFormApi } from 'informed';
import ChoiceItemProps from '../../interfaces/components/questionItems/ChoiceItemProps';


export class ChoiceItem extends React.PureComponent<ChoiceItemProps> {
    initialValue?: any = this.props.questionnaireResponseItem.answers && this.props.questionnaireResponseItem.answers[0] && this.props.questionnaireResponseItem.answers[0].id;

    onChange() {
        const { questionnaireResponseItem, item, formApi } = this.props;
        const option = item.options && item.options.find(x => x.id === formApi.getValue(item.id));
        option && questionnaireResponseItem.reply(option.id);
    }

    renderChoiceOptions() {
        const { item, validationStatus } = this.props;
        return <RadioGroup field={item.id} validateOnChange={true} validate={this.validate.bind(this)} initialValue={this.initialValue}>
            {item.options && item.options.map(option => {
                return <div className="form-check" key={option.id}>
                    <Radio className={`form-check-input ${validationStatus}`} id={option.id} value={option.id} onChange={this.onChange.bind(this)} />
                    <label className="form-check-label" htmlFor={option.id}>{option.value}</label>
                </div>
            })}
        </RadioGroup>
    }

    validate() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.validate();
        const errorMessages = questionnaireResponseItem.errorMessages.join(' ');
        return errorMessages === '' ? undefined : errorMessages;
    }

    render() {
        return <div className="form-group">
            {this.renderChoiceOptions()}
        </div>
    }
}

export default withFormApi<ChoiceItemProps, FormState>(ChoiceItem);