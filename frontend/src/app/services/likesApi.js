import { api } from "./api";
export const likesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        likePost: builder.mutation({
            query: (body) => ({
                url: `/likes`,
                method: 'POST',
                body,
            })
        }),
        unlikePost: builder.mutation({
            query: (postId) => ({
                url: `/likes/${postId}`,
                method: 'DELETE'
            })
        }),
    })
});
export const { useLikePostMutation, useUnlikePostMutation } = likesApi;
export const { endpoints: { likePost, unlikePost } } = likesApi;
