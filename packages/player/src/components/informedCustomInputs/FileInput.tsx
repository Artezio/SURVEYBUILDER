import * as React from 'react';
import { asField } from 'informed';

interface FileInputProps {
    multiple?: boolean;
    className?: string;
    forwardedRef?: React.RefObject<HTMLInputElement>;
    onChange?: (e: any) => void;
    validate?: () => string | undefined;
    field: string;
    id?: string;
}

export const FileInput = asField<FileInputProps>(({ fieldState, fieldApi, ...props }) => {
    const { field, forwardedRef, onChange, ...rest } = props;
    function overrideOnChange(e: any) {
        fieldApi.setTouched(true);
        onChange(e);
    }

    function onBlur() {
        fieldApi.setTouched(true);
    }

    return <input 
        {...rest}
        onBlur={onBlur}
        type="file"
        name={field}
        ref={forwardedRef}
        onChange={overrideOnChange}
    />
})