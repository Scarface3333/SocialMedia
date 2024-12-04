import { jsx as _jsx } from "react/jsx-runtime";
export const ErrorMessage = ({ error = "" }) => {
    return error && _jsx("p", { className: "text-red-500 mt-2 mb-5 text-small", children: error });
};
