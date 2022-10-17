import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const __getPostById = createAsyncThunk(
    "GET_BY_ID",
    async (payload, thunkAPI) => {
      try{
        const {data} = await axios.get(`http://localhost:3001/posts/${payload}`)
        return thunkAPI.fulfillWithValue(data)
      }catch (e) {
        return thunkAPI.rejectWithValue(e.code);
      }
    }
  )

  export const __updatePost = createAsyncThunk(
    "UPDATE_POST",
    async (payload, thunkAPI)=>{
      try{
        const {data} = await axios.put(`http://localhost:3001/posts/${payload}`)
        console.log(data)
      }catch(e){
        return thunkAPI.rejectWithValue(e.code);
      }
    }
  )

  const initialState = {
    post: {},
    error: null,
    isLoading: false,
    isSuccess: false,
  };

  export const postSlice = createSlice({
    name : "post",
    initialState,
    reducers : {},
    extraReducers : {
          [__getPostById.pending]: (state,action) => {
            state.isLoading = true;
          },
          [__getPostById.fulfilled]: (state,action)=> {
            state.isLoading = false;
            state.post = action.payload;
          },
          [__getPostById.rejected]: (state,action)=>{
            state.isLoading = false;
            state.error = action.payload
          },
    },
  });
  export const {} = postSlice.actions;
  export default postSlice.reducer;
  