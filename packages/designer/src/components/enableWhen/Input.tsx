import * as React from 'react';
import { Text, TextArea, useFormApi } from 'informed';
import InputProps from '../../interfaces/components/enableWhen/InputProps';

export const Input = (props: InputProps) => {
    const { type, index, enableWhen } = props;
    const formApi = useFormApi();

    const onBlur = () => {
        const answer = formApi.getValue(`${index}][answer`);
        enableWhen.answer = answer;
    }

    return <div>
        {type === 'textarea' ? <TextArea className="form-control" field={`${index}][answer`} id="enableWhenAnswer" onBlur={onBlur} /> :
            <Text type={type} className="form-control" field={`${index}][answer`} id="enableWhenAnswer" onBlur={onBlur} />}
    </div>
}

export default Input;