import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import TimeItemProps from '../../interfaces/components/questionItems/TimeItemProps';
import InputLikeComponent from './InputLikeComponent';


export class TimeItem extends InputLikeComponent<TimeItemProps> {
    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        let value = formApi.getValue(item.id) as string | undefined;
        value = value === undefined ? undefined : value + ':00';  //seconds required by FHIR regexp but missing in input type "time" 
        questionnaireResponseItem.reply(value);
    }

    render() {
        const { item, validationStatus } = this.props;
        return <div className="form-group">
            <Text autoComplete="off"
                id={item.id}
                type="time"
                className={`form-control ${validationStatus}`}
                field={item.id}
                onBlur={this.onBlur.bind(this)}
                validateOnChange={true}
                validate={this.validate.bind(this)}
                initialValue={this.initialValue}
            />
        </div>
    }
}

export default withFormApi<TimeItemProps, FormState>(TimeItem);