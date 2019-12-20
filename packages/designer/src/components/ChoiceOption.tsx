import * as React from 'react';
import ChoiceOptionProps from '../interfaces/components/ChoiceOptionProps';
import { useObservableModel } from '@artezio/observable-react';

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

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { option } = this.props;
        if (e.target.checked) {
            option.selectAsDefault();
        } else {
            option.unselectAsDefault();
        }
    }

    onClick(e: React.ChangeEvent<HTMLInputElement>) {
        const { option } = this.props;
        if (e.target.checked) {
            option.selectAsDefault();
        }
    }

    render() {
        const { option } = this.props;
        return <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <label htmlFor={`${option.id}-initial`} className="mr-1 mb-0">By default</label>
                        <input checked={option.defaultSelected} id={`${option.id}-initial`} type="radio" onChange={this.onChange.bind(this)} onClick={this.onClick.bind(this)} />
                    </div>
                </div>
                <input autoComplete="off"
                    id={`${option.id}-option`}
                    className="form-control"
                    defaultValue={option.value}
                    onBlur={this.onBlur.bind(this)}
                />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" onClick={this.remove.bind(this)} >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    }
}

export default useObservableModel<ChoiceOptionProps>(ChoiceOption);