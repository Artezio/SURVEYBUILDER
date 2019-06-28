import * as React from 'react';
import ChoiceProps from '../../interfaces/components/enableWhen/ChoiceProps';
import { Select, Option, useFormApi } from 'informed';


export const Choice = (props: ChoiceProps) => {
    const { item, index, enableWhen } = props;
    const formApi = useFormApi();

    const onChange = () => {
        const answer = formApi.getValue(`${index}][answer`);
        enableWhen.answer = answer;
    }

    return <Select field={`${index}][answer`} onChange={onChange}>
        {item.options.map((option, i) => <Option key={i} value={option.value}>{option.value}</Option>)}
    </Select>
}

export default Choice;