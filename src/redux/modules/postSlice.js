import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { serverUrl } from "../api";

export const __getPostById = createAsyncThunk(
  "GET_BY_ID",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${serverUrl}/posts/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const __updatePost = createAsyncThunk(
  "UPDATE_POST",
  async (payload, thunkAPI) => {
    // console.log(payload);
    try {
      const { data } = await axios.put(
        `${serverUrl}/posts/${payload.id}`,
        payload
      );
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

const initialState = {
  post: {},
  error: null,
  isLoading: false,
  isSuccess: false,
  isEdit: false,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPostById.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__getPostById.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__getPostById.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__updatePost.fulfilled]: (state, action) => {
      state.post = action.payload;
    },
    [__updatePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = postSlice.actions;
export default postSlice.reducer;
