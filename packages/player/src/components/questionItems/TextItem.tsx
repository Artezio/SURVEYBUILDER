import * as React from 'react';
import { TextArea, withFormApi, FormState } from 'informed';
import TextItemProps from '../../interfaces/components/questionItems/TextItemProps';


export class TextItem extends React.Component<TextItemProps> {

    onBlur() {
        const { formApi, item, questionnaireResponseItem } = this.props;
        questionnaireResponseItem.reply(formApi.getValue(item.id));
    }

    render() {
        const { item } = this.props;
        return <div className="form-group">
            <TextArea autoComplete="off" id={item.id} className="form-control" field={item.id} onBlur={this.onBlur.bind(this)} />
        </div>
    }
}

export default withFormApi<TextItemProps, FormState>(TextItem);