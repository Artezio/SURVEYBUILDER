import * as React from 'react';
import MultiChoiceOptionProps from '../interfaces/components/MultiChoiceOptionProps';
import { Radio } from 'informed';

export class MultiChoiceOption extends React.Component<MultiChoiceOptionProps> {
    constructor(props: MultiChoiceOptionProps) {
        super(props);
    }

    render() {
        const { option, item } = this.props;
        return <div className="form-group">

        </div >
    }
}

export default MultiChoiceOption;