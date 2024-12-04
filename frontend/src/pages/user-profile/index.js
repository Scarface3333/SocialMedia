import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, Card, Image, useDisclosure } from '@nextui-org/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetUser, selectCurrent } from '../../features/user/userSlice';
import { useGetUserByIdQuery, useLazyCurrentQuery, useLazyGetUserByIdQuery } from '../../app/services/userApi';
import { useFollowUserMutation, useUnfollowUserMutation } from '../../app/services/followApi';
import { GoBack } from '../../components/go-back';
import { BASE_URL } from '../../constants';
import { MdOutlinePersonAddAlt1, MdOutlinePersonAddDisabled } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { ProfileInfo } from '../../components/profile-info';
import { formatToClientDate } from '../../utils/format-to-client-date';
import { CountInfo } from '../../components/count-info';
import { EditProfile } from '../../components/edit-profile';
export const UserProfile = () => {
    const { id } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const currentUser = useSelector(selectCurrent);
    const { data } = useGetUserByIdQuery(id ?? '');
    const [followUser] = useFollowUserMutation();
    const [unfollowUser] = useUnfollowUserMutation();
    const [triggerGetUserByIdQuery] = useLazyGetUserByIdQuery();
    const [triggerCurrentQuery] = useLazyCurrentQuery();
    const dispatch = useDispatch();
    useEffect(() => () => {
        dispatch(resetUser());
    }, []);
    const handleFollow = async () => {
        try {
            if (id) {
                data?.isFollowing ?
                    await unfollowUser(id).unwrap()
                    : await followUser({ followingId: id }).unwrap;
                await triggerGetUserByIdQuery(id);
                await triggerCurrentQuery();
            }
        }
        catch (error) {
        }
    };
    const handleClose = async () => {
        try {
            if (id) {
                await triggerGetUserByIdQuery(id);
                await triggerCurrentQuery();
                onClose();
            }
        }
        catch (error) {
            console.error(error);
        }
    };
    if (!data) {
        return null;
    }
    return (_jsxs(_Fragment, { children: [_jsx(GoBack, {}), _jsxs("div", { className: "flex items-stretch gap-4", children: [_jsxs(Card, { className: "flex flex-col items-center text-center space-y-4 p-5 flex-2", children: [_jsx(Image, { src: `${BASE_URL}${data.avatarUrl}`, alt: data.name, width: 200, height: 200, className: "border-4 border-white" }), _jsxs("div", { className: "flex flex-col text-2xl font-bold gap-4 items-center", children: [data.name, currentUser?.id !== id ? (_jsx(Button, { color: data?.isFollowing ? "default" : "primary", variant: "flat", className: "gap-2", onClick: handleFollow, endContent: data?.isFollowing ? (_jsx(MdOutlinePersonAddDisabled, {})) : (_jsx(MdOutlinePersonAddAlt1, {})), children: data?.isFollowing ? 'Отписаться' : 'Подписаться' })) : (_jsx(Button, { endContent: _jsx(CiEdit, {}), onClick: () => onOpen(), children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C" }))] })] }), _jsxs(Card, { className: "flex flex-col space-y-4 p-5 flex-1", children: [_jsx(ProfileInfo, { title: '\u041F\u043E\u0447\u0442\u0430', info: data.email }), _jsx(ProfileInfo, { title: '\u041C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435', info: data.location }), _jsx(ProfileInfo, { title: '\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F', info: formatToClientDate(data.dateOfBirth) }), _jsx(ProfileInfo, { title: '\u041E\u0431\u043E \u043C\u043D\u0435', info: data.bio }), _jsxs("div", { className: "flex gap-2", children: [_jsx(CountInfo, { count: data.followers.length, title: '\u041F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438' }), _jsx(CountInfo, { count: data.following.length, title: '\u041F\u043E\u0434\u043F\u0438\u0441\u0438\u043A' })] })] })] }), _jsx(EditProfile, { isOpen: isOpen, onClose: handleClose, user: data })] }));
};
