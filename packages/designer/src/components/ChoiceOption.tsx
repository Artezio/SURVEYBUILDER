import * as React from 'react';
import ChoiceOptionProps from '../interfaces/components/ChoiceOptionProps';
import { Radio } from 'informed';

export class ChoiceOption extends React.Component<ChoiceOptionProps> {
    constructor(props: ChoiceOptionProps) {
        super(props);
    }

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
        const { option, disabled, submitForm } = this.props;
        return <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <label htmlFor={`${option.id}-initial`} className="mb-0 mr-1">As default</label>
                        <Radio value={option.id} id={`${option.id}-initial`} type="submit" onChange={submitForm} />
                    </div>
                </div>
                <input autoComplete="off" className="form-control" defaultValue={option.value} onBlur={this.onBlur.bind(this)} disabled={disabled} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.remove.bind(this)} disabled={disabled} >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div >
    }
}

export default ChoiceOption;