import React from 'react';

import {
    UseFormRegister,
    FieldError,
    RegisterOptions,
    FieldValues,
    FieldPath,
} from 'react-hook-form';

import { TextField, TextFieldProps } from '@mui/material';

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
}: ExtendOwnProps<T>): React.ReactElement => {
    return (
        <TextField
            {...register(id, rules)}
            {...rest}
            id={id}
            label={error?.message || label}
            error={!!error}
            type={type}
        />
    );
};

export { CustomTextField };
