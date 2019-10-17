import * as React from 'react';
import BooleanProps from '../../interfaces/components/enableWhen/BooleanProps';
import { useFormApi, Select, Option } from 'informed';

export const Boolean = (props: BooleanProps) => {
    const { index, enableWhen } = props;
    const formApi = useFormApi();

    const onChange = () => {
        const answer = formApi.getValue(`${index}][answer`);
        enableWhen.answer = answer === 'true' ? true : false;
    }

    return <Select className="form-control" field={`${index}][answer`} onChange={onChange}>
        <Option value='' disabled={true}>Select answer</Option>
        <Option value={true}>Yes</Option>
        <Option value={false}>No</Option>
    </Select>
}

export default Boolean;