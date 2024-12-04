import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useGetAllPostsQuery } from '../../app/services/postsApi';
import { CreatePost } from '../../components/create-post';
import { Card } from '../../components/card';
export const Posts = () => {
    const { data } = useGetAllPostsQuery();
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: 'mb-10 w-full', children: _jsx(CreatePost, {}) }), data && data.length > 0
                ? data.map(({ content, author, id, authorId, comments, likes, likedByUser, createdAt }) => (_jsx(Card, { avatarUrl: author.avatarUrl ?? '', content: content, name: author.name ?? '', likesCount: likes.length, commentsCount: comments.length, authorId: authorId, id: id, likedByUser: likedByUser, createdAt: createdAt, cardFor: 'post' }, id)))
                : null] }));
};
