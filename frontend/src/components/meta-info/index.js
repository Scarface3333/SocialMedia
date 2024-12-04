import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const MetaInfo = ({ count, Icon }) => {
    return (_jsxs("div", { className: 'flex items-center gap-2 cursor-pointer', children: [count > 0 && (_jsx("p", { className: "font-semibold text-default-400 text-l", children: count })), _jsx("p", { className: 'text-default-400 text-xl hover:text-2xl ease-in duration-100', children: _jsx(Icon, {}) })] }));
};
