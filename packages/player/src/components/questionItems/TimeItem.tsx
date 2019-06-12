import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import TimeItemProps from '../../interfaces/components/questionItems/TimeItemProps';


export class TimeItem extends React.Component<TimeItemProps> {

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(formApi.getValue(item.id));
    }

    render() {
        const { item } = this.props;
        return <div className="form-group">
            <Text autoComplete="off" id={item.id} type="time" className="form-control" field={item.id} onBlur={this.onBlur.bind(this)} />
        </div>
    }
}

export default withFormApi<TimeItemProps, FormState>(TimeItem);