import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { ThemeContext } from '../theme-provider';
import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import { FaRegMoon } from 'react-icons/fa';
import { LuSunMedium } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectisAuthentificated } from '../../features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';
export const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isAuthenticated = useSelector(selectisAuthentificated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handlelogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/auth');
    };
    return (_jsxs(Navbar, { children: [_jsx(NavbarBrand, { children: _jsx("p", { className: "font-bold text-inherit", children: "Network Social" }) }), _jsxs(NavbarContent, { justify: 'end', children: [_jsx(NavbarItem, { className: 'lg:flex rext-3x1 cursor-pointer', onClick: () => toggleTheme(), children: theme === 'light' ? _jsx(FaRegMoon, {}) : _jsx(LuSunMedium, {}) }), _jsx(NavbarItem, { children: isAuthenticated && (_jsxs(Button, { color: 'default', variant: 'flat', className: 'gap-2', onClick: handlelogout, children: [_jsx(CiLogout, {}), " ", _jsx("span", { children: "\u0412\u044B\u0439\u0442\u0438" })] })) })] })] }));
};
