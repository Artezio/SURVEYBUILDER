import * as React from 'react';
import { Select, Option } from 'informed';
import OpenChoiceProps from '../../interfaces/components/enableWhen/OpenChoiceProps';


export class OpenChoice extends React.Component<OpenChoiceProps> {



    render() {
        const { item, index } = this.props;
        const optionsToBeRendered = item.options.slice(0, item.options.length - 2);
        return <Select field={`${index}][answer`}>
            {optionsToBeRendered.map((option, i) => <Option key={i} value={option.value}>{option.value}</Option>)}
            <option>Other</option>
        </Select>
    }
}

export default OpenChoice;