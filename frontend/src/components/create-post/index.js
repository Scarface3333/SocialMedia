import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCreatePostMutation, useLazyGetAllPostsQuery } from '../../app/services/postsApi';
import { Controller, useForm } from 'react-hook-form';
import { Button, Textarea } from '@nextui-org/react';
import { ErrorMessage } from '../error-message';
import { IoMdCreate } from 'react-icons/io';
export const CreatePost = () => {
    const [createPost] = useCreatePostMutation();
    const [triggerAllPosts] = useLazyGetAllPostsQuery();
    const { handleSubmit, control, formState: { errors }, setValue } = useForm();
    const error = errors?.post?.message;
    const onSubmit = handleSubmit(async (data) => {
        try {
            await createPost({ content: data.post }).unwrap();
            setValue('post', '');
            await triggerAllPosts().unwrap();
        }
        catch (error) {
            console.log(error);
        }
    });
    return (_jsxs("form", { className: 'flex-grow', onSubmit: onSubmit, children: [_jsx(Controller, { name: "post", control: control, defaultValue: "", rules: {
                    required: 'Обязательное поле'
                }, render: ({ field }) => (_jsx(Textarea, { ...field, labelPlacement: 'outside', placeholder: '\u041E \u0447\u0435\u043C \u0434\u0443\u043C\u0430\u0435\u0442\u0435?', className: 'mb-5' })) }), errors && _jsx(ErrorMessage, { error: error }), _jsx(Button, { color: 'success', className: 'flex-end', endContent: _jsx(IoMdCreate, {}), type: 'submit', children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0441\u0442" })] }));
};
