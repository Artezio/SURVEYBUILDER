import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import DateTimeItemProps from '../../interfaces/components/questionItems/DateTimeItemProps';
import ERROR_MESSAGES from '../../constants/errorMessages';


export class DateTimeItem extends React.PureComponent<DateTimeItemProps> {

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
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
        return <div className="form-group">
            <Text autoComplete="off"
                id={item.id}
                type="datetime-local"
                className="form-control"
                field={item.id}
                onBlur={this.onBlur.bind(this)}
                validateOnChange={true}
                validate={this.validate.bind(this)}
            />
        </div>
    }
}

export default withFormApi<DateTimeItemProps, FormState>(DateTimeItem);