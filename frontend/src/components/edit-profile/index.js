import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useState } from 'react';
import { ThemeContext } from '../theme-provider';
import { useUpdateUserMutation } from '../../app/services/userApi';
import { useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Textarea } from '@nextui-org/react';
import { Input } from '../input';
import { MdOutlineEmail } from 'react-icons/md';
import { ErrorMessage } from '../error-message';
import { hasErrorField } from '../../utils/has-error-field';
export const EditProfile = ({ isOpen = false, onClose = () => null, user, }) => {
    const { theme } = useContext(ThemeContext);
    const [updateUser, { isLoading }] = useUpdateUserMutation();
    const [error, setError] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const { id } = useParams();
    const { handleSubmit, control } = useForm({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: {
            email: user?.email,
            name: user?.name,
            dateOfBirth: user?.dateOfBirth,
            bio: user?.bio,
            location: user?.location
        }
    });
    const handleFileChange = (e) => {
        if (e.target.files !== null) {
            setSelectedFile(e.target.files[0]);
        }
    };
    const onSubmit = async (data) => {
        if (id) {
            try {
                const formData = new FormData();
                data.name && formData.append('name', data.name);
                data.email && data.email !== user?.email && formData.append('email', data.email);
                data.dateOfBirth && formData.append('dateOfBirth', new Date(data.dateOfBirth).toISOString());
                data.bio && formData.append('bio', data.bio);
                data.location && formData.append('location', data.location);
                selectedFile && formData.append('avatar', selectedFile);
                await updateUser({ userData: formData, id }).unwrap();
                onClose();
            }
            catch (error) {
                if (hasErrorField(error)) {
                    setError(error.data.error);
                }
            }
        }
    };
    return (_jsx(Modal, { isOpen: isOpen, onClose: onClose, className: `${theme} text-foreground`, children: _jsx(ModalContent, { children: (onClose) => (_jsxs(_Fragment, { children: [_jsx(ModalHeader, { className: 'flex flex-col gap-1', children: "\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044F" }), _jsx(ModalBody, { children: _jsxs("form", { className: 'flex flex-col gap-4', onSubmit: handleSubmit(onSubmit), children: [_jsx(Input, { control: control, name: 'email', label: 'Email', type: 'email', endContent: _jsx(MdOutlineEmail, {}), required: "\u041E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u043E\u043B\u0435" }), _jsx(Input, { control: control, name: 'name', label: '\u0418\u043C\u044F', type: 'text' }), _jsx("input", { type: 'file', name: 'avatarUrl', placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B', onChange: handleFileChange }), _jsx(Input, { control: control, name: 'dateOfBirth', label: '\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F', type: 'date', placeholder: '\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F' }), _jsx(Controller, { name: 'bio', control: control, render: ({ field }) => (_jsx(Textarea, { ...field, rows: 4, placeholder: '\u0412\u0430\u0448\u0430 \u0431\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F' })) }), _jsx(Input, { control: control, name: 'location', label: '\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435', type: 'text' }), _jsx(ErrorMessage, { error: error }), _jsx("div", { className: "flex gap-2 justify-end", children: _jsx(Button, { fullWidth: true, color: 'primary', type: 'submit', isLoading: isLoading, children: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u0435 \u043F\u0440\u043E\u0444\u0438\u043B\u044C" }) })] }) }), _jsx(ModalFooter, { children: _jsx(Button, { color: 'danger', variant: 'light', onPress: onClose, children: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C" }) })] })) }) }));
};
