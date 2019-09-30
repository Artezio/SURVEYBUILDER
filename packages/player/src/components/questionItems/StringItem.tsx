import * as React from 'react';
import { Text, FormState, withFormApi } from 'informed';
import StringItemProps from '../../interfaces/components/questionItems/StringItemProps';
import InputLikeComponent from './InputLikeComponent';


export class StringItem extends InputLikeComponent<StringItemProps> {
    render() {
        const { item, validationStatus } = this.props;
        return <div className="form-group">
            <Text autoComplete="off"
                id={item.id}
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

export default withFormApi<StringItemProps, FormState>(StringItem);