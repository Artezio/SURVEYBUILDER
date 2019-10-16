import * as React from 'react';
import ChoiceOptionProps from '../interfaces/components/ChoiceOptionProps';
import { useObservableModel } from '../observableConnector/useObservableModel';

export class ChoiceOptionOther extends React.Component<ChoiceOptionProps> {
    RadioRef: React.RefObject<HTMLInputElement> = React.createRef();

    onBlur(e: any) {
        const { option } = this.props;
        option.setValue(e.target.value);
    }

    remove() {
        const { option } = this.props;
        option.remove();
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { option } = this.props;
        if (e.target.checked) {
            option.selectAsDefault();
        } else {
            option.unselectAsDefault();
        }
    }

    render() {
        const { option } = this.props;
        const disabled = !option.defaultSelected;
        return <div className="form-group">
            <label htmlFor={`${option.id}-option`}>Other</label>
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <label htmlFor={`${option.id}-initial`} className="mr-1 mb-0">By default</label>
                        <input checked={option.defaultSelected} id={`${option.id}-initial`} type="radio" onChange={this.onChange.bind(this)} />
                    </div>
                </div>
                <input autoComplete="off"
                    id={`${option.id}-option`}
                    className="form-control"
                    disabled={disabled}
                    defaultValue={option.value}
                    onBlur={this.onBlur.bind(this)}
                />
            </div>
        </div>
    }
}

export default useObservableModel<ChoiceOptionProps>(ChoiceOptionOther);