import * as React from 'react';
import { useObservableModel } from '@art-forms/observable';
import MultiChoiceItemProps from '../../interfaces/components/questionItems/MultiChoiceItemProps';
import MultiChoiceItemOption from '../MultiChoiceItemOption';


export class MultiChoiceItem extends React.Component<MultiChoiceItemProps> {
    render() {
        const { item, questionnaireResponseItem } = this.props;
        return <div className="form-group">
            {item.options.map(option => <MultiChoiceItemOption key={option.id} option={option} questionnaireResponseItem={questionnaireResponseItem} />)}
        </div>
    }
}

export default useObservableModel<MultiChoiceItemProps>(MultiChoiceItem);