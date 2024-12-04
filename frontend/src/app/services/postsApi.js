import { api } from "./api";
export const PostApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createPost: builder.mutation({
            query: (postData) => ({
                url: '/posts',
                method: 'POST',
                body: postData
            })
        }),
        getAllPosts: builder.query({
            query: () => ({
                url: '/posts',
                method: 'GET'
            })
        }),
        getPostById: builder.query({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'GET'
            })
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: 'DELETE'
            })
        })
    })
});
export const { useCreatePostMutation, useGetAllPostsQuery, useGetPostByIdQuery, useDeletePostMutation, useLazyGetAllPostsQuery, useLazyGetPostByIdQuery } = PostApi;
export const { endpoints: { createPost, getAllPosts, getPostById, deletePost } } = PostApi;
