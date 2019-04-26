import * as React from 'react';
import MultiChoiceOptionProps from '../interfaces/components/MultiChoiceOptionProps';

export class MultiChoiceOption extends React.Component<MultiChoiceOptionProps> {

    onBlur(e: any) {
        const { option, item } = this.props;
        item.updateOption({ ...option, value: e.target.value });
    }

    remove() {
        const { option, item } = this.props;
        item.removeOption(option);
    }

    render() {
        const { option } = this.props;
        return <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" disabled={true} />
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