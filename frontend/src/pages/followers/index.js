import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../features/user/userSlice';
import { Link } from 'react-router-dom';
import { Card, CardBody } from '@nextui-org/react';
import { User } from '../../components/user';
export const Followers = () => {
    const currentUser = useSelector(selectCurrent);
    if (!currentUser) {
        return null;
    }
    return currentUser.followers.length > 0 ? (_jsx("div", { className: "gap-5 flex-col", children: currentUser.followers.map(user => (_jsx(Link, { to: `/users/${user.follower.id}`, children: _jsx(Card, { children: _jsx(CardBody, { className: 'block', children: _jsx(User, { name: user.follower.name ?? '', avatarUrl: user.follower.avatarUrl ?? '', description: user.follower.email ?? '' }) }) }) }, user.follower.id))) })) : (_jsx("h1", { children: "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u043E\u0432" }));
};
