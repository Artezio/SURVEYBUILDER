import * as React from 'react';
import { OpenChoiceItemProps } from '../../interfaces/components/questionItems/OpenChoiceItemProps';
import * as Models from '@art-forms/models';
import useObservableModel from '../../HOCs/useObservableModel';
import ChoiceOption from '../ChoiceOption';


export class OpenChoiceItem extends React.Component<OpenChoiceItemProps> {

    renderChoiceOptions() {
        const { item } = this.props;
        return item && (<div className="choice-options">
            {item.options.map(option => <ChoiceOption key={option.id} option={option} item={item} />)}
        </div>);
    }

    addOption() {
        const { item } = this.props;
        const option = Models.ChoiceOptionFactory.createChoiceOption();
        item && item.addOption(option);
    }

    render() {
        return <div>
            {this.renderChoiceOptions()}
            <div className="form-group">
                <button className="btn btn-outline-secondary form-control" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<OpenChoiceItemProps>(OpenChoiceItem);