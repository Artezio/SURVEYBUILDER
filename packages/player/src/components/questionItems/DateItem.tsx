import * as React from 'react';
import { Text, FormState, withFormApi } from 'informed';
import DateItemProps from '../../interfaces/components/questionItems/DateItemProps';


export class DateItem extends React.Component<DateItemProps> {

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(formApi.getValue(item.id));
    }

    render() {
        const { item } = this.props;
        return <div className="form-group">
            <Text autoComplete="off" id={item.id} type="date" className="form-control" field={item.id} onBlur={this.onBlur.bind(this)} />
        </div>
    }
}

export default withFormApi<DateItemProps, FormState>(DateItem);