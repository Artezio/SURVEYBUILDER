import * as React from 'react';
import { MultiChoiceItemProps } from '../../interfaces/components/questionItems/MultiChoiceItemProps';
import * as Models from '@art-forms/models';
import { useObservableModel } from '../../observableConnector/useObservableModel';
import MultiChoiceOption from '../MultiChoiceOption';


export class MultiChoiceItem extends React.Component<MultiChoiceItemProps> {
    answerOptionFactory: Models.AnswerOptionFactory = new Models.AnswerOptionFactory(this.props.item);

    addOption() {
        const { item } = this.props;
        item.addAnswerOption(this.answerOptionFactory.createAnswerOption());
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
                <button className="btn btn-outline-secondary btn-block" onClick={this.addOption.bind(this)}>Add option</button>
            </div>
        </div>
    }
}

export default useObservableModel<MultiChoiceItemProps>(MultiChoiceItem);