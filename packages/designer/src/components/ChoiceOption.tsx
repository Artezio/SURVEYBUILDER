import * as React from 'react';
import ChoiceOptionProps from '../interfaces/components/ChoiceOptionProps';
import { Radio } from 'informed';

export class ChoiceOption extends React.Component<ChoiceOptionProps> {

    onBlur(e: any) {
        const { option, item } = this.props;
        item.updateOption({ ...option, value: e.target.value });
    }

    remove() {
        const { option, item, reset } = this.props;
        item.removeOption(option);
        if (item.initialValue === option.id) {
            reset();
        }
    }

    render() {
        const { option, otherOption, submitForm, item } = this.props;
        return <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <label htmlFor={`${option.id}-initial`} className="mb-0 mr-1">As default</label>
                        <Radio value={option.id} id={`${option.id}-initial`} onChange={submitForm} />
                    </div>
                </div>
                <input autoComplete="off" id={`${option.id}-otherOption`} disabled={otherOption && item.initialValue !== option.id} className="form-control" defaultValue={option.value} onBlur={this.onBlur.bind(this)} />
                <div className="input-group-append">
                    {!otherOption && <button className="btn btn-outline-secondary" onClick={this.remove.bind(this)} >
                        <i className="fas fa-trash"></i>
                    </button>}
                </div>
            </div>
        </div >
    }
}

export default ChoiceOption;