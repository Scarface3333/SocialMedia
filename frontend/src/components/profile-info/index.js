import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const ProfileInfo = ({ title, info }) => {
    if (!info) {
        return null;
    }
    return (_jsxs("p", { className: 'font-semibold', children: [_jsx("span", { className: 'text-gray-500 mr-2', children: title }), info] }));
};
