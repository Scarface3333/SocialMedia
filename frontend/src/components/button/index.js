import { jsx as _jsx } from "react/jsx-runtime";
import { Button as NextButton } from '@nextui-org/react';
export const Button = ({ children, className, color, icon, fullWidth, type }) => {
    return (_jsx(NextButton, { startContent: icon, size: 'lg', color: color, variant: 'light', className: className, type: type, fullWidth: fullWidth, children: children }));
};
