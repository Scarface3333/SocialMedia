import { jsx as _jsx } from "react/jsx-runtime";
import { useCurrentQuery } from '../../app/services/userApi';
import { Spinner } from '@nextui-org/react';
export const AuthGuard = ({ children }) => {
    const { isLoading } = useCurrentQuery();
    if (isLoading) {
        return _jsx(Spinner, {});
    }
    return children;
};
