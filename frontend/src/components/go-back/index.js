import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
export const GoBack = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    };
    return (_jsxs("div", { onClick: handleGoBack, className: 'text-default-500 flex items-center gap-2 mb-10 cursor-pointer', children: [_jsx(FaRegArrowAltCircleLeft, {}), "\u041D\u0430\u0437\u0430\u0434"] }));
};
