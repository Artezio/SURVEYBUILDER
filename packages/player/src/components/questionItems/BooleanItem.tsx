import * as React from 'react';
import { RadioGroup, Radio, FormState, withFormApi } from 'informed';
import BooleanItemProps from '../../interfaces/components/questionItems/BooleanItemProps';


export class BooleanItem extends React.PureComponent<BooleanItemProps> {

    onChange() {
        const { questionnaireResponseItem, item, formApi } = this.props;
        questionnaireResponseItem.reply(formApi.getValue(item.id));
    }

    validate() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.validate();
        const errorMessages = questionnaireResponseItem.errorMessages.join(' ');
        return errorMessages === '' ? undefined : errorMessages;
    }

    render() {
        const { item } = this.props;
        return <RadioGroup field={item.id} validateOnChange={true} validate={this.validate.bind(this)}>
            <div className="form-group">
                <div className="form-check">
                    <Radio className="form-check-input" id={`${item.id}-true`} value={true} onChange={this.onChange.bind(this)} />
                    <label className="form-check-label" htmlFor={`${item.id}-true`}>Yes</label>
                </div>
                <div className="form-check">
                    <Radio className="form-check-input" id={`${item.id}-false`} value={false} onChange={this.onChange.bind(this)} />
                    <label className="form-check-label" htmlFor={`${item.id}-false`}>No</label>
                </div>
            </div>
        </RadioGroup>
    }
}

export default withFormApi<BooleanItemProps, FormState>(BooleanItem);