import * as React from 'react';
import ChoiceProps from '../../interfaces/components/enableWhen/ChoiceProps';
import { Select, Option, useFormApi } from 'informed';


export const Choice = (props: ChoiceProps) => {
    const { item, index, enableWhen } = props;
    const formApi = useFormApi();

    const onChange = () => {
        const optionId = formApi.getValue(`${index}][answer`);
        const option = item.options.find(option => option.id === optionId);
        if (option) {
            enableWhen.answer = option.value;
        }
    }

    return <Select className="custom-select" field={`${index}][answer`} onChange={onChange}>
        <Option value="" disabled={true}>Select answer</Option>
        {item.options.map((option, i) => <Option key={i} value={option.id}>{option.value}</Option>)}
    </Select>
}



export default Choice;