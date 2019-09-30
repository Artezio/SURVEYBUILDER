import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import DateTimeItemProps from '../../interfaces/components/questionItems/DateTimeItemProps';
import InputLikeComponent from './InputLikeComponent';


export class DateTimeItem extends InputLikeComponent<DateTimeItemProps> {
    render() {
        const { item, validationStatus } = this.props;
        return <div className="form-group">
            <Text autoComplete="off"
                id={item.id}
                type="datetime-local"
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

export default withFormApi<DateTimeItemProps, FormState>(DateTimeItem);