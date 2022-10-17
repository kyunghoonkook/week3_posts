import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getPostThunk = createAsyncThunk("GET_POST", async (thunkAPI) => {
  try {
    const { data } = await axios.get(`http://localhost:3001/posts/`);
    return thunkAPI.fulfillWithValue(data);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.code);
  }
});

export const __deletePostThunk = createAsyncThunk(
  "DELETE_POST",
  async (arg, thunkAPI) => {
    try {
      axios.delete(`http://localhost:3001/posts/${arg}`);
      return thunkAPI.fulfillWithValue(arg);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
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
      state.post = action.payload;
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
  },
});

export const { clearPost } = postsSlice.actions;
export default postsSlice.reducer;
