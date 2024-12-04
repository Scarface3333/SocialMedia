import { jsx as _jsx } from "react/jsx-runtime";
export const Container = ({ children }) => {
    return (_jsx("div", { className: 'flex max-w-screen-xl mx-auto mt-10', children: children }));
};
