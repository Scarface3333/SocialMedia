import { jsx as _jsx } from "react/jsx-runtime";
import { User as NextUiUser } from '@nextui-org/react';
import { BASE_URL } from '../../constants';
export const User = ({ name = '', avatarUrl = '', description = '', className = '', }) => {
    return (_jsx(NextUiUser, { name: name, className: className, avatarProps: {
            src: `${BASE_URL}${avatarUrl}`
        } }));
};
