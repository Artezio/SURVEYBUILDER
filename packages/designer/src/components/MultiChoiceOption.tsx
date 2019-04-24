import * as React from 'react';
import MultiChoiceOptionProps from '../interfaces/components/MultiChoiceOptionProps';
import { Checkbox } from 'informed';

export class MultiChoiceOption extends React.Component<MultiChoiceOptionProps> {

    onBlur(e: any) {
        const { option, item } = this.props;
        item.updateOption({ ...option, value: e.target.value });
    }

    remove() {
        const { option, item } = this.props;
        item.removeOption(option);
    }

    componentDidMount() {
        const { setTouched, option } = this.props;
        setTouched(`value-${option.id}`);
    }

    render() {
        const { option, submitForm } = this.props;
        return <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <label htmlFor={`${option.id}-initial`} className="mb-0 mr-1">Include to default</label>
                        <Checkbox field={`value-${option.id}`} id={`${option.id}-initial`} onChange={submitForm} />
                    </div>
                </div>
                <input autoComplete="off" className="form-control" defaultValue={option.value} onBlur={this.onBlur.bind(this)} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.remove.bind(this)} >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div >
    }
}

export default MultiChoiceOption;