import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const CountInfo = ({ count, title }) => {
    return (_jsxs("div", { className: "flex flex-col items-center space-x-2 p-4", children: [_jsx("span", { className: "text-4xl font-semibold", children: count }), _jsx("span", { children: title })] }));
};
