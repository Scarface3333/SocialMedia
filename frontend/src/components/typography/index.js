import { jsx as _jsx } from "react/jsx-runtime";
export const Typography = ({ children, size = 'text-xl' }) => {
    return (_jsx("p", { className: `${size}`, children: children }));
};
