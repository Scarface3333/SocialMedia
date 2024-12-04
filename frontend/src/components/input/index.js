import { jsx as _jsx } from "react/jsx-runtime";
import { useController } from 'react-hook-form';
import { Input as NextInput } from '@nextui-org/react';
export const Input = ({ name, label, placeholder, type, control, required = '', endContent, }) => {
    const { field, fieldState: { invalid }, formState: { errors } } = useController({
        name,
        control,
        rules: {
            required
        }
    });
    return (_jsx(NextInput, { id: name, label: label, type: type, placeholder: placeholder, value: field.value, name: field.name, isInvalid: invalid, onChange: field.onChange, onBlur: field.onBlur, errorMessage: `${errors[name]?.message ?? ''}`, endContent: endContent }));
};
