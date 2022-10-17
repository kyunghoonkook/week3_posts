import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __addPost = createAsyncThunk(
  "ADD_POST",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3000/posts", payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};
export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
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

export const {} = postsSlice.actions;
export default postsSlice.reducer;
