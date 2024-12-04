import { api } from "./api";
export const FollowApi = api.injectEndpoints({
    endpoints: (builder) => ({
        followUser: builder.mutation({
            query: (body) => ({
                url: `/follow`,
                method: 'POST',
                body,
            })
        }),
        unfollowUser: builder.mutation({
            query: (userId) => ({
                url: `/unfollow/${userId}`,
                method: 'DELETE'
            })
        }),
    })
});
export const { useFollowUserMutation, useUnfollowUserMutation } = FollowApi;
export const { endpoints: { followUser, unfollowUser } } = FollowApi;
