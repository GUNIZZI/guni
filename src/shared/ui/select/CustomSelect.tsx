import {
    FieldPath,
    FieldValues,
    RegisterOptions,
    Control,
    useController,
    PathValue,
} from 'react-hook-form';

import { Opt } from '@/shared/type/common';

import {
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    SelectProps,
    FormHelperText,
    FormControlProps,
} from '@mui/material';

interface OwnProps<T extends FieldValues> {
    id: string;
    name: FieldPath<T>;
    label: string;
    opts: Opt[];
    control: Control<T>;
    rules?: RegisterOptions<T, FieldPath<T>>;
    defaultValue?: string | number;
}

type ExtendOwnProps<T extends FieldValues> = Omit<SelectProps, keyof OwnProps<T> | 'error'> &
    OwnProps<T> &
    Omit<FormControlProps, keyof OwnProps<T>>;

const CustomSelect = <T extends FieldValues>({
    id,
    name,
    label,
    opts,
    control,
    rules,
    defaultValue,
    ...props
}: ExtendOwnProps<T>) => {
    const {
        field: { onChange, onBlur, value, ref },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules,
        defaultValue: defaultValue as PathValue<T, FieldPath<T>>,
    });

    const formControlProps: FormControlProps = {
        error: !!error,
        fullWidth: true,
        ...props,
    };

    return (
        <FormControl {...formControlProps}>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                labelId={`${id}-label`}
                id={id}
                label={label}
                value={value as string | number}
                onChange={onChange}
                onBlur={onBlur}
                inputRef={ref}
            >
                {opts.map(item => (
                    <MenuItem key={item.code} value={item.code}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
            {error && <FormHelperText>{error.message}</FormHelperText>}
        </FormControl>
    );
};

export { CustomSelect };
