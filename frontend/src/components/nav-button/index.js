import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '../button';
import { Link } from 'react-router-dom';
export const NavButton = ({ children, icon, href }) => {
    return (_jsx(Button, { className: 'flex justify-start text-xl w-full', icon: icon, children: _jsx(Link, { to: href, children: children }) }));
};
