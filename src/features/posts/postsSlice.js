import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchPosts from "./fetchPosts";

const initialState = {
    posts: [],
    isLoading: false,
    isError: false,
    error: "",
};


export const getPosts = createAsyncThunk("posts/getPosts", async () => {
    const posts = await fetchPosts();
    return {
        posts,
        time: new Date(Date.now()).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }),
    };
});

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
            state.error = "";
        }).addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload.posts;
        }).addCase(getPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
    }
});

export default postsSlice.reducer;
