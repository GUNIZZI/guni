import { ReactNode } from 'react';

import {
    UseFormRegister,
    FieldError,
    RegisterOptions,
    FieldValues,
    FieldPath,
} from 'react-hook-form';

import { Tooltip, TextField, TextFieldProps } from '@mui/material';

interface OwnProps<T extends FieldValues> {
    id: FieldPath<T>;
    label: string;
    register: UseFormRegister<T>;
    error?: FieldError;
    type?: string;
    rules?: RegisterOptions<T, FieldPath<T>>;
}

type ExtendOwnProps<T extends FieldValues> = Omit<TextFieldProps, keyof OwnProps<T>> & OwnProps<T>;

const CustomTextField = <T extends FieldValues>({
    id,
    label,
    register,
    error,
    type = 'text',
    rules,
    ...rest
}: ExtendOwnProps<T>): ReactNode => {
    return (
        <Tooltip
            title={error?.message || ''}
            open={!!error}
            arrow
            placement="right"
            classes={{
                tooltip: 'isError', // 툴팁 클래스 적용
            }}
        >
            <TextField
                {...register(id, rules)}
                {...rest}
                label={label}
                error={!!error}
                type={type}
            />
        </Tooltip>
    );
};

export { CustomTextField };
