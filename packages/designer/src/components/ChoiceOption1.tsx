import * as React from 'react';
import ChoiceOptionProps from '../interfaces/components/ChoiceOptionProps';


export const ChoiceOption = (props: ChoiceOptionProps) => {
    const { option, item, disabled } = props;
    const onBlur = (e: any) => {
        option.value = e.target.value;
        item.updateOption(option);
    }
    const remove = () => {
        item.removeOption(option);
    }
    return <div className="form-group">
        <div className="input-group">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input type="radio" disabled={true} />
                </div>
            </div>
            <input autoComplete="off" className="form-control" defaultValue={option.value} onBlur={onBlur} disabled={disabled} />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" onClick={remove} disabled={disabled} >
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </div>
    </div>
}

export default ChoiceOption;