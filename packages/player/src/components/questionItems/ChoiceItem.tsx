import * as React from 'react';
import { RadioGroup, Radio, FormState, withFormApi } from 'informed';
import ChoiceItemProps from '../../interfaces/components/questionItems/ChoiceItemProps';


export class ChoiceItem extends React.Component<ChoiceItemProps> {

    onChange() {
        const { questionnaireResponseItem, item, formApi } = this.props;
        const option = item.options.find(x => x.id === formApi.getValue(item.id));
        option && questionnaireResponseItem.reply(option);
    }

    renderChoiceOptions() {
        const { item } = this.props;
        return <RadioGroup field={item.id}>
            {item.options.map(option => {
                return <div className="form-check" key={option.id}>
                    <Radio className="form-check-input" id={option.id} value={option.id} onChange={this.onChange.bind(this)} />
                    <label className="form-check-label" htmlFor={option.id}>{option.value}</label>
                </div>
            })}
        </RadioGroup>
    }

    render() {
        return <div className="form-group">
            {this.renderChoiceOptions()}
        </div>
    }
}

export default withFormApi<ChoiceItemProps, FormState>(ChoiceItem);