import * as React from 'react';
import { TextArea, withFormApi, FormState } from 'informed';
import TextItemProps from '../../interfaces/components/questionItems/TextItemProps';
import InputLikeComponent from './InputLikeComponent';


export class TextItem extends InputLikeComponent<TextItemProps> {
    render() {
        const { item, validationStatus } = this.props;
        return <div className="form-group">
            <TextArea autoComplete="off"
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

export default withFormApi<TextItemProps, FormState>(TextItem);