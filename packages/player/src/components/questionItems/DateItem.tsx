import * as React from 'react';
import { Text, FormState, withFormApi } from 'informed';
import DateItemProps from '../../interfaces/components/questionItems/DateItemProps';


export class DateItem extends React.PureComponent<DateItemProps> {
    initialValue?: any = this.props.questionnaireResponseItem.answers && this.props.questionnaireResponseItem.answers[0] && this.props.questionnaireResponseItem.answers[0].value;

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
                type="date"
                className="form-control"
                field={item.id}
                onBlur={this.onBlur.bind(this)}
                validateOnChange={true}
                validate={this.validate.bind(this)}
                initialValue={this.initialValue}
            />
        </div>
    }
}

export default withFormApi<DateItemProps, FormState>(DateItem);