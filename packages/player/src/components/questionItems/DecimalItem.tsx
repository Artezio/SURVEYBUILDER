import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import DecimalItemProps from '../../interfaces/components/questionItems/DecimalItemProps';
import ERROR_MESSAGES from '../../constants/errorMessages';


export class DecimalItem extends React.PureComponent<DecimalItemProps> {

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(formApi.getValue(item.id));
    }

    validate() {
        const { questionnaireResponseItem } = this.props;
        questionnaireResponseItem.validate();
        if (!questionnaireResponseItem.isValidByRequired) {
            return ERROR_MESSAGES.IS_REQUIRED;
        }
        if (!questionnaireResponseItem.isValidByRegExp) {
            return ERROR_MESSAGES.INVALID_INPUT;
        }
    }

    render() {
        const { item } = this.props;
        return <div className="form-group">
            <Text autoComplete="off"
                id={item.id} type="number"
                className="form-control"
                field={item.id}
                onBlur={this.onBlur.bind(this)}
                validateOnChange={true}
                validate={this.validate.bind(this)}
            />
        </div>
    }
}

export default withFormApi<DecimalItemProps, FormState>(DecimalItem);