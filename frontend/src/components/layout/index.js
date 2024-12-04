import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Header } from '../header';
import { Container } from '../container';
import { NavBar } from '../nav-bar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectisAuthentificated, selectUser } from '../../features/user/userSlice';
import { Profile } from '../profile';
export const Layout = () => {
    const isAuthenticated = useSelector(selectisAuthentificated);
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/auth');
        }
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs(Container, { children: [_jsx("div", { className: "flex-2 p-4", children: _jsx(NavBar, {}) }), _jsx("div", { className: "flex-1 p-4", children: _jsx(Outlet, {}) }), _jsx("div", { className: "flex-2 p-4", children: _jsx("div", { className: "flex-col flex gap-5", children: user && _jsx(Profile, {}) }) })] })] }));
};
