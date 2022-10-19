import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../api";

export const __getPostThunk = createAsyncThunk(
  "GET_POST",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/posts/`, payload);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __deletePostThunk = createAsyncThunk(
  "DELETE_POST",
  async (payload, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/posts/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __addPost = createAsyncThunk(
  "ADD_POST",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`http://localhost:3001/posts`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  isSuccess: false,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPost: (state) => {
      state.posts = {
        id: 0,
        body: "",
        username: "",
        title: "",
      };
    },
  },
  extraReducers: {
    [__getPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__deletePostThunk.fulfilled]: (state, action) => {
      const target = state.posts.findIndex(
        (comment) => comment.id === action.payload
      );

      state.posts.splice(target, 1);
    },
    [__deletePostThunk.rejected]: () => {},
    [__deletePostThunk.pending]: () => {},

    [__addPost.pending]: (state) => {
      state.isLoading = true;
    },

    [__addPost.fulfillWithValue]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },

    [__addPost.rejectWithValue]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clearPost } = postsSlice.actions;
export default postsSlice.reducer;
