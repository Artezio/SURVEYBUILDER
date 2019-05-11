import * as React from 'react';
import { MultiChoiceItemProps } from '../../interfaces/components/questionItems/MultiChoiceItemProps';
import * as Models from '@art-forms/models';
import { useObservableModel } from '@art-forms/observable';
import MultiChoiceOption from '../MultiChoiceOption';


export class MultiChoiceItem extends React.Component<MultiChoiceItemProps> {

    addOption() {
        const { item } = this.props;
        const option = Models.MultiChoiceOptionFactory.createMultiChoiceOption();
        item.addOption(option);
    }

    renderChoiceOptions() {
        const { item } = this.props;
        return <div className="option-list">
            {item.options.map(option => <MultiChoiceOption key={option.id} option={option} item={item} />)}
        </div>;
    }

    render() {
        return <div>
            {this.renderChoiceOptions()}
            <div>
                <button className="btn btn-outline-secondary form-control" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<MultiChoiceItemProps>(MultiChoiceItem);