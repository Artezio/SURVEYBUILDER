import * as React from 'react';
import { Text, withFormApi, FormState } from 'informed';
import DecimalItemProps from '../../interfaces/components/questionItems/DecimalItemProps';
import InputLikeComponent from './InputLikeComponent';


export class DecimalItem extends InputLikeComponent<DecimalItemProps> {
    render() {
        const { item, validationStatus } = this.props;
        return <div className="form-group">
            <Text autoComplete="off"
                id={item.id} type="number"
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

export default withFormApi<DecimalItemProps, FormState>(DecimalItem);