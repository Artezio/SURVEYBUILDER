import * as React from 'react';
import * as Models from '@art-forms/models';
import MultiChoiceOptionProps from '../interfaces/components/MultiChoiceOptionProps';
import QuestionItem from './questionItems/QuestionItem';
import { useObservableModel } from '@art-forms/observable';

export class MultiChoiceOption extends QuestionItem<MultiChoiceOptionProps> {

    onBlur(e: any) {
        const { option } = this.props;
        option.setValue(e.target.value)
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

    renderCheckbox() {
        const { option } = this.props;
        return <div className="input-group-text">
            <label className="mr-1 mb-0" htmlFor={`${option.id}-checkbox`}>As default</label>
            <input id={`${option.id}-checkbox`} type="checkbox" checked={option.defaultSelected} onChange={this.onChange.bind(this)} />
        </div>
    }

    render() {
        const { option } = this.props;
        return <div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    {this.renderCheckbox()}
                </div>
                <input autoComplete="off" className="form-control" defaultValue={option.value} onBlur={this.onBlur.bind(this)} />
                <div className="input-group-append">
                    <button type="button" className="btn btn-outline-secondary" onClick={this.remove.bind(this)} >
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div >
    }
}

export default useObservableModel<MultiChoiceOptionProps>(MultiChoiceOption);