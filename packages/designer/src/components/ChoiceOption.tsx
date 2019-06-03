import * as React from 'react';
import ChoiceOptionProps from '../interfaces/components/ChoiceOptionProps';
import { Radio } from 'informed';

export class ChoiceOption extends React.Component<ChoiceOptionProps> {
    RadioRef: React.RefObject<HTMLInputElement> = React.createRef();

    onBlur(e: any) {
        const { option } = this.props;
        option.setValue(e.target.value);
    }

    remove() {
        const { option } = this.props;
        option.remove();
    }

    onChange() {
        const { option } = this.props;
        option.asDefault();
    }

    render() {
        const { option, disabledOption, customLabel } = this.props;
        return <>
            {customLabel && <label htmlFor={`${option.id}-option`}>{customLabel}</label>}
            <div className="form-group">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            {/* <label htmlFor={`${option.id}-initial`} className="mr-1">As default</label> */}
                            <input type="radio" disabled={true} />
                            {/* <Radio value={option.id} id={`${option.id}-initial`} onChange={this.onChange.bind(this)} forwardedRef={this.RadioRef} /> */}
                        </div>
                    </div>
                    <input autoComplete="off"
                        id={`${option.id}-option`}
                        className="form-control"
                        disabled={disabledOption}
                        defaultValue={option.value}
                        onBlur={this.onBlur.bind(this)}
                    />
                    <div className="input-group-append">
                        {!disabledOption && <button className="btn btn-outline-secondary" onClick={this.remove.bind(this)} >
                            <i className="fas fa-trash"></i>
                        </button>}
                    </div>
                </div>
            </div >
        </>
    }
}

export default ChoiceOption;