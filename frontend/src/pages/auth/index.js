import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardBody, Tab, Tabs } from '@nextui-org/react';
import { useState } from 'react';
import { Register } from '../../features/user/register';
import { Login } from '../../features/user/login';
export const Auth = () => {
    const [selected, setSelectd] = useState('login');
    return (_jsx("div", { className: 'flex items-center justify-center h-screen', children: _jsx("div", { className: "flex-col", children: _jsx(Card, { className: 'max-w-full w-[340px] h-[450px]', children: _jsx(CardBody, { className: 'overflow-hidden', children: _jsxs(Tabs, { fullWidth: true, size: 'md', selectedKey: selected, onSelectionChange: (key) => setSelectd(key), children: [_jsx(Tab, { title: '\u0412\u0445\u043E\u0434', children: _jsx(Login, { setSelected: setSelectd }) }, "login"), _jsx(Tab, { title: '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F', children: _jsx(Register, { setSelected: setSelectd }) }, "sign-up")] }) }) }) }) }));
};
