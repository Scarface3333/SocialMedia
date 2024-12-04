import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useForm } from 'react-hook-form';
import { Button, Textarea } from '@nextui-org/react';
import { ErrorMessage } from '../error-message';
import { IoMdCreate } from 'react-icons/io';
import { useCreateCommentMutation } from '../../app/services/commentsApi';
import { useLazyGetPostByIdQuery } from '../../app/services/postsApi';
import { useParams } from 'react-router-dom';
export const CreateComment = () => {
    const { id } = useParams();
    const [createComment] = useCreateCommentMutation();
    const [getPostById] = useLazyGetPostByIdQuery();
    const { handleSubmit, control, formState: { errors }, setValue } = useForm();
    const error = errors?.post?.message;
    const onSubmit = handleSubmit(async (data) => {
        try {
            if (id) {
                await createComment({ content: data.comment, postId: id }).unwrap();
                setValue('post', '');
                await getPostById(id).unwrap();
            }
        }
        catch (error) {
            console.log(error);
        }
    });
    return (_jsxs("form", { className: 'flex-grow', onSubmit: onSubmit, children: [_jsx(Controller, { name: "comment", control: control, defaultValue: "", rules: {
                    required: 'Обязательное поле'
                }, render: ({ field }) => (_jsx(Textarea, { ...field, labelPlacement: 'outside', placeholder: '\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', className: 'mb-5' })) }), errors && _jsx(ErrorMessage, { error: error }), _jsx(Button, { color: 'primary', className: 'flex-end', endContent: _jsx(IoMdCreate, {}), type: 'submit', children: "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C" })] }));
};
