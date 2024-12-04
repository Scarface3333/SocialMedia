import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../features/user/userSlice';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { BASE_URL } from '../../constants';
import { Link } from 'react-router-dom';
import { MdAlternateEmail } from 'react-icons/md';
export const Profile = () => {
    const current = useSelector(selectCurrent);
    if (!current) {
        return null;
    }
    const { name, email, avatarUrl, id } = current;
    return (_jsxs(Card, { className: 'py-4 w-[302px]', children: [_jsx(CardHeader, { className: 'pb-0 pt-2 px-4 flex-col items-start', children: _jsx(Image, { alt: 'Card profile', className: 'object-cover rounded-xl', src: `${BASE_URL}${avatarUrl}`, width: 370 }) }), _jsxs(CardBody, { className: "overflow-visible py-2", children: [_jsx(Link, { to: `/users/${id}`, children: _jsx("h4", { className: "font-bold text-large mb-2", children: name }) }), _jsxs("p", { className: "text-default-500 flex items-center gap-2", children: [_jsx(MdAlternateEmail, {}), email] })] })] }));
};
