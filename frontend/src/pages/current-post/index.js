import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../app/services/postsApi';
import { Card } from '../../components/card';
import { GoBack } from '../../components/go-back';
import { CreateComment } from '../../components/create-comment';
export const CurrentPost = () => {
    const params = useParams();
    const { data } = useGetPostByIdQuery(params?.id ?? '');
    if (!data) {
        return _jsx("h2", { children: "\u041F\u043E\u0441\u0442\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442" });
    }
    const { content, id, authorId, comments, likes, author, likedByUser, createdAt, } = data;
    return (_jsxs(_Fragment, { children: [_jsx(GoBack, {}), _jsx(Card, { cardFor: 'current-post', avatarUrl: author.avatarUrl ?? '', content: content, name: author.name ?? '', likesCount: likes.length, commentsCount: comments.length, authorId: authorId, id: id, likedByUser: likedByUser, createdAt: createdAt }), _jsx("div", { className: "mt-10", children: _jsx(CreateComment, {}) }), _jsx("div", { className: "mt-10", children: data.comments ?
                    data.comments.map((comment) => (_jsx(Card, { cardFor: 'comment', avatarUrl: comment.user.avatarUrl ?? '', content: comment.content, name: comment.user.name ?? '', authorId: comment.userId, commentId: comment.id, id: id }, comment.id))) : null })] }));
};
