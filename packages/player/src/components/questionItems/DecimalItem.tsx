import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import DecimalItemProps from '../../interfaces/components/questionItems/DecimalItemProps';


export class DecimalItem extends React.Component<DecimalItemProps> {

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(formApi.getValue(item.id));
    }

    render() {
        const { item } = this.props;
        return <div className="form-group">
            <Text autoComplete="off" id={item.id} type="number" className="form-control" field={item.id} onBlur={this.onBlur.bind(this)} />
        </div>
    }
}

export default withFormApi<DecimalItemProps, FormState>(DecimalItem);