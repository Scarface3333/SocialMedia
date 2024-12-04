import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { CardBody, CardFooter, CardHeader, Card as NextUiCard, Spinner } from '@nextui-org/react';
import { useLikePostMutation, useUnlikePostMutation } from '../../app/services/likesApi';
import { useDeletePostMutation, useLazyGetAllPostsQuery, useLazyGetPostByIdQuery } from '../../app/services/postsApi';
import { useDeleteCommentMutation } from '../../app/services/commentsApi';
import { Link, useNavigate } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../features/user/userSlice';
import { formatToClientDate } from '../../utils/format-to-client-date';
import { User } from "../user";
import { RiDeleteBinLine } from 'react-icons/ri';
import { Typography } from '../typography';
import { MetaInfo } from '../meta-info';
import { FcDislike } from 'react-icons/fc';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { FaRegComment } from 'react-icons/fa';
import { ErrorMessage } from '../error-message';
import { hasErrorField } from '../../utils/has-error-field';
export const Card = ({ avatarUrl = '', name = '', authorId = '', content = '', commentId = '', likesCount = 0, commentsCount = 0, createdAt, id = '', cardFor = 'post', likedByUser = false, }) => {
    const [likePost] = useLikePostMutation();
    const [unlikePost] = useUnlikePostMutation();
    const [triggerGetAllPosts] = useLazyGetAllPostsQuery();
    const [triggerGetPostById] = useLazyGetPostByIdQuery();
    const [deletePost, deletePostStatus] = useDeletePostMutation();
    const [deleteComment, deleteCommentStatus] = useDeleteCommentMutation();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrent);
    const refetchPosts = async () => {
        switch (cardFor) {
            case 'post':
                await triggerGetAllPosts().unwrap();
                break;
            case 'current-post':
                await triggerGetAllPosts().unwrap();
                break;
            case 'comment':
                await triggerGetPostById(id).unwrap();
                break;
            default:
                throw new Error('Неверный аргумент cardFor');
        }
    };
    const handleClick = async () => {
        try {
            likedByUser
                ? await unlikePost(id).unwrap()
                : await likePost({ postId: id }).unwrap();
            if (cardFor === 'current-post') {
                await triggerGetPostById(id).unwrap();
            }
            if (cardFor === 'post') {
                await triggerGetAllPosts().unwrap();
            }
        }
        catch (error) {
            if (hasErrorField(error)) {
                setError(error.data.error);
            }
            else {
                setError(error);
            }
        }
    };
    const handleDelete = async () => {
        try {
            switch (cardFor) {
                case 'post':
                    await deletePost(id).unwrap();
                    await refetchPosts();
                    break;
                case "current-post":
                    await deletePost(id).unwrap();
                    navigate('/');
                    break;
                case "comment":
                    await deleteComment(commentId).unwrap();
                    await refetchPosts();
                    break;
                default:
                    throw new Error('Неверный аргумент cardFor');
            }
        }
        catch (error) {
            if (hasErrorField(error)) {
                setError(error.data.error);
            }
            else {
                setError(error);
            }
        }
    };
    return (_jsxs(NextUiCard, { className: 'mb-5', children: [_jsxs(CardHeader, { className: 'justify-between items-center bg-transparent', children: [_jsx(Link, { to: `/users/${authorId}`, children: _jsx(User, { name: name, className: 'text-small font-semibold leading-non text-default-600', avatarUrl: avatarUrl, description: createdAt && formatToClientDate(createdAt) }) }), authorId === currentUser?.id && (_jsx("div", { className: "cursor-pointer", onClick: handleDelete, children: deletePostStatus.isLoading || deleteCommentStatus.isLoading ? (_jsx(Spinner, {})) : (_jsx(RiDeleteBinLine, {})) }))] }), _jsx(CardBody, { className: 'px-3 py-2 mb-5', children: _jsx(Typography, { children: content }) }), cardFor !== 'comment' && (_jsxs(CardFooter, { className: 'gap-3', children: [_jsxs("div", { className: "flex gap-5 items-center", children: [_jsx("div", { onClick: handleClick, children: _jsx(MetaInfo, { count: likesCount, Icon: likedByUser ? FcDislike : MdOutlineFavoriteBorder }) }), _jsx(Link, { to: `/posts/${id}`, children: _jsx(MetaInfo, { count: commentsCount, Icon: FaRegComment }) })] }), _jsx(ErrorMessage, { error: error })] }))] }));
};
