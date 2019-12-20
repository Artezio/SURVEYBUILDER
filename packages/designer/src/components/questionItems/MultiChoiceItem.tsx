import * as React from 'react';
import { MultiChoiceItemProps } from '../../interfaces/components/questionItems/MultiChoiceItemProps';
import * as Models from '@artezio/models';
import { useObservableModel } from '@artezio/observable-react';
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
                <button className="btn btn-outline-secondary border-0" onClick={this.addOption.bind(this)}>
                    <i className="fas fa-plus mr-1"></i><span>Add option</span>
                </button>
            </div>
        </div>
    }
}

export default useObservableModel<MultiChoiceItemProps>(MultiChoiceItem);