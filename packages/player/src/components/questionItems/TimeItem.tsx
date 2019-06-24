import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import TimeItemProps from '../../interfaces/components/questionItems/TimeItemProps';


export class TimeItem extends React.PureComponent<TimeItemProps> {

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        let value = formApi.getValue(item.id) as string | undefined;
        value = value === undefined ? undefined : value + ':00';  //seconds required by FHIR regexp but missing in input type "time" 
        questionnaireResponseItem.reply(value);
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
            <Text autoComplete="off" id={item.id} type="time" className="form-control" field={item.id} onBlur={this.onBlur.bind(this)} validateOnChange={true} validate={this.validate.bind(this)} />
        </div>
    }
}

export default withFormApi<TimeItemProps, FormState>(TimeItem);