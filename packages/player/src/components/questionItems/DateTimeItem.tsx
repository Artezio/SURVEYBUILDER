import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import DateTimeItemProps from '../../interfaces/components/questionItems/DateTimeItemProps';


export class DateTimeItem extends React.Component<DateTimeItemProps> {

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(formApi.getValue(item.id));
    }

    render() {
        const { item } = this.props;
        return <div className="form-group">
            <Text autoComplete="off" id={item.id} type="datetime-local" className="form-control" field={item.id} onBlur={this.onBlur.bind(this)} />
        </div>
    }
}

export default withFormApi<DateTimeItemProps, FormState>(DateTimeItem);