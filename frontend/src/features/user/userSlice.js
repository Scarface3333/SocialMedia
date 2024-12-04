import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../app/services/userApi";
const initialState = {
    user: null,
    isAuthentificated: false,
    users: null,
    current: null
};
const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: () => initialState,
        resetUser: (state) => {
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
            state.token = action.payload.token;
            state.isAuthentificated = true;
        })
            .addMatcher(userApi.endpoints.current.matchFulfilled, (state, action) => {
            state.isAuthentificated = true;
            state.current = action.payload;
        })
            .addMatcher(userApi.endpoints.current.matchFulfilled, (state, action) => {
            state.user = action.payload;
        });
    }
});
export const { logout, resetUser } = slice.actions;
export default slice.reducer;
export const selectisAuthentificated = (state) => state.user.isAuthentificated;
export const selectCurrent = (state) => state.user.current;
export const selectUser = (state) => state.user.user;
export const selectUsers = (state) => state.user.users;
