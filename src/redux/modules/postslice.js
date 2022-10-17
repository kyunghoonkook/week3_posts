import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const __getPostThunk = createAsyncThunk(
  "GET_POST",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/posts/`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);
export const __addPostThunk = createAsyncThunk(
  "ADD_POST",
  async (arg, thunkAPI) => {
    try {
      const { data } = await axios.post(`http://localhost:3001/posts`, arg);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

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

export const __updatePostThunk = createAsyncThunk(
  "UPDATE_POST",
  async (arg, thunkAPI) => {
    try {
      axios.patch(`http://localhost:3001/posts/${arg.id}`, arg);
      return thunkAPI.fulfillWithValue(arg);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  todo: {
    id: 0,
    body: "",
    username: "",
    title: "",
  },
  error: null,
  isLoading: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    clearPost: (state) => {
      state.post = {
        id: 0,
        body: "",
        username: "",
        title: "",
      };
    },
  },
  extraReducers: {
    [__addPostThunk.pending]: (state) => {
      state.isSuccess = false;
      state.isLoading = true;
    },
    [__addPostThunk.fulfilled]: (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.posts.push(action.payload);
    },
    [__addPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPostThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePostThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__updatePostThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePostThunk.rejected]: (state, action) => {
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

export const { clearPost } = postSlice.actions;
export default postSlice.reducer;
