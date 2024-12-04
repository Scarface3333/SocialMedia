import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Link } from "@nextui-org/react";
import { Input } from "../../components/input";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../app/services/userApi";
import { hasErrorField } from "../../utils/has-error-field";
import { ErrorMessage } from "../../components/error-message";
export const Register = ({ setSelected }) => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
            name: ''
        }
    });
    const [register, { isLoading }] = useRegisterMutation();
    const [error, setError] = useState('');
    const onSubmit = async (data) => {
        try {
            await register(data).unwrap();
            setSelected('login');
        }
        catch (error) {
            if (hasErrorField(error)) {
                setError(error.data.error);
            }
        }
    };
    return (_jsxs("form", { className: 'flex flex-col gap-4', onSubmit: handleSubmit(onSubmit), children: [_jsx(Input, { control: control, name: "name", label: "\u0418\u043C\u044F", type: "text", required: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435" }), _jsx(Input, { control: control, name: "email", label: "Email", type: "email", required: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435" }), _jsx(Input, { control: control, name: "password", label: "\u041F\u0430\u0440\u043E\u043B\u044C", type: "password", required: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435" }), _jsx(ErrorMessage, { error: error }), _jsxs("p", { className: "text-center text-small", children: ["\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?", " ", _jsx(Link, { size: 'sm', className: "cursor-pointer", onPress: () => setSelected("login"), children: "\u0412\u043E\u0439\u0434\u0438\u0442\u0435" })] }), _jsx("div", { className: "flex gap-2 justify-end", children: _jsx(Button, { fullWidth: true, color: "primary", type: "submit", isLoading: isLoading, children: "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F" }) })] }));
};
