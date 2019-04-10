import * as React from 'react';
import ChoiceOptionProps from '../interfaces/components/ChoiceOptionProps';
import Ocations, { Trashcan } from '@githubprimer/octicons-react';


export const ChoiceOption = (props: ChoiceOptionProps) => {
    const { option, item } = props;
    const onBlur = (e: any) => {
        option.value = e.target.value;
        item.updateOption(option);
    }
    const remove = () => {
        item.removeOption(option);
    }
    const setInitial = () => {
        item.updateItem({...item, initialValue: option})
    }
    return <div className="input-group my-1">
        <div className="input-group-prepend">
            <div className="input-group-text">
                <label htmlFor={option.id} className="mb-0 mr-2">As default</label>
                <input type="radio" name="choice-item-initial-value" id={option.id} checked={option.id === (item.initialValue && item.initialValue.id)} onClick={setInitial} onChange={e => {}}/>
            </div>
        </div>
        <input className="form-control" defaultValue={option.value} onBlur={onBlur} />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary p-1" onClick={remove}>
                <Ocations icon={Trashcan} />
            </button>
        </div>
    </div>
}

export default ChoiceOption;