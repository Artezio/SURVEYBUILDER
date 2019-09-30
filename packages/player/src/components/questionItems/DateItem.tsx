import * as React from 'react';
import { Text, FormState, withFormApi } from 'informed';
import DateItemProps from '../../interfaces/components/questionItems/DateItemProps';
import InputLikeComponent from './InputLikeComponent';


export class DateItem extends InputLikeComponent<DateItemProps> {
    render() {
        const { item, validationStatus } = this.props;
        return <div className="form-group">
            <Text autoComplete="off"
                id={item.id}
                type="date"
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

export default withFormApi<DateItemProps, FormState>(DateItem);