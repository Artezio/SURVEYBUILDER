import * as React from 'react';
import { TextItemProps } from '../interfaces/componentProps/TextItem';
import { Form, Text } from 'informed';

export class TextItem extends React.Component<TextItemProps> {
    render() {
        const { item } = this.props;
        return <div className="col-11 border border-info py-1">
            <p>{item.text}</p>
            <Form>
                <div className="form-group">
                    <Text className="form-control" field="value" initialValue={item.initialValue} />
                </div>
            </Form>
        </div>
    }
}

export default TextItem;