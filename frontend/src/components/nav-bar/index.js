import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavButton } from '../nav-button';
import { BsPostcard } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { FaUsers } from 'react-icons/fa';
export const NavBar = () => {
    return (_jsx("nav", { children: _jsxs("ul", { className: "flex flex-col gap-5", children: [_jsx("li", { children: _jsx(NavButton, { href: '/', icon: _jsx(BsPostcard, {}), children: "\u041F\u043E\u0441\u0442\u044B" }) }), _jsx("li", { children: _jsx(NavButton, { href: 'following', icon: _jsx(FiUsers, {}), children: "\u041F\u043E\u0434\u0438\u0441\u043A\u0438" }) }), _jsx("li", { children: _jsx(NavButton, { href: 'followers', icon: _jsx(FaUsers, {}), children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438" }) })] }) }));
};
