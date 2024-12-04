import { api } from "./api";
export const commentsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createComment: builder.mutation({
            query: (newComment) => ({
                url: `/comments`,
                method: 'POST',
                body: newComment
            })
        }),
        deleteComment: builder.mutation({
            query: (commentId) => ({
                url: `/comments/${commentId}`,
                method: 'DELETE'
            })
        }),
    })
});
export const { useCreateCommentMutation, useDeleteCommentMutation } = commentsApi;
export const { endpoints: { createComment, deleteComment } } = commentsApi;
