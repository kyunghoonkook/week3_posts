import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import thunk from "redux-thunk";
import { current } from "@reduxjs/toolkit";

export const __addComment = createAsyncThunk(
  "ADD_COMMENT",
  async (payload,thunkAPI) =>{
    try{
      
      const {data} = await axios.post('http://localhost:3001/comments',payload)
      return thunkAPI.fulfillWithValue(data)
    }catch(e){
      return thunkAPI.rejectWithValue(e.code)
    }
  }
)

export const __getComment = createAsyncThunk(
  "GET_COMMENT",
  async (payload,thunkAPI)=>{
    try{
      const{data} = await axios.get(`http://localhost:3001/comments/${payload}`)
      return thunkAPI.fulfillWithValue(data)
    }catch(e){
      return thunkAPI.rejectWithValue(e.code)
    }
    
  }
)

export const __getCommentAll = createAsyncThunk(
  "GET_COMMENT_ALL",
  async (payload,thunkAPI) => {
    try{
      const{data} = await axios.get('http://localhost:3001/comments')
      return thunkAPI.fulfillWithValue(data)
    }catch(e){
      return thunkAPI.rejectWithValue(e.code)
    }
  }
)

export const __getCommentById = createAsyncThunk(
  "GET_COMMENT_BY_ID",
  async (payload,thunkAPI) => {
    try{
      const{data} = await axios.get(`http://localhost:3001/comments?postId=${payload}`)
      return thunkAPI.fulfillWithValue(data)
    }catch(e){
      return thunkAPI.rejectWithValue(e.code)
    }
  }
)

export const __deleteComment = createAsyncThunk(
  "DELETE_COMMENT",
  async (payload,thunkAPI) =>{
    try{
      const {data} = await axios.delete(`http://localhost:3001/comments/${payload}`)
      return thunkAPI.fulfillWithValue(payload)
    }catch(e){
      return thunkAPI.rejectWithValue(e.code)
    }
  }
)

export const __updateComment = createAsyncThunk(
  "UPDATE_COMMENT",
  async (payload,thunkAPI)=>{
    try{
      const {data} = await axios.put(`http://localhost:3001/comments/${payload.id}`,payload)
      return thunkAPI.fulfillWithValue(data)
    }catch(e){
      return thunkAPI.rejectWithValue(e.code)
    }
  }
)

const initialState = {
  comment : {
    username : '',
    content : '',
    postId : 1
  },
  error: null,
  isLoading: false,
  isSuccess: false,
  isEdit : false,

  comments : {
    data: [],
    isLoading: false,
    error: null,
  }
};
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__addComment.pending]:(state,action)=>{
      state.isLoading = true
    },
    [__addComment.fulfilled]:(state,action)=>{
      state.isLoading = false
      state.comments.data.push(action.payload) 
    },
    [__addComment.rejected]:(state,action)=>{
      state.isLoading = false
    },
    [__getComment.pending]:(state,action)=>{
      state.isLoading = true
    },
    [__getComment.fulfilled]:(state,action)=>{
      state.isLoading = false
      state.comments.data = action.payload
    },
    [__getComment.rejected]:(state,action) => {
      state.isLoading = false
    },
    [__getCommentAll.pending]:(state,action)=>{
      state.isLoading = true
    },
    [__getCommentAll.fulfilled]:(state,action)=>{
      state.isLoading = false
      state.comments.data = action.payload
    },
    [__getCommentAll.pending]:(state,action)=>{
      state.isLoading = false
    },
    [__getCommentById.pending]:(state,action)=>{
      state.isLoading = true
    },
    [__getCommentById.fulfilled]:(state,action)=>{
      state.isLoading = false
      state.comments.data = action.payload
    },
    [__getCommentById.rejected]:(state,action)=>{
      state.isLoading = false
    },
    [__deleteComment.pending]:(state,action)=>{
      state.isLoading = true
    },
    [__deleteComment.fulfilled]:(state,action)=>{
      state.isLoading = false
      const target = state.comments.data.filter(
        (comment)=> comment.id !== action.payload)
       state.comments.data = target

    },
    [__deleteComment.rejected]:(state,action)=>{
      state.isLoading = false
    },
    [__updateComment.pending]:(state,action)=>{
      state.isLoading  = true
    },
    [__updateComment.fulfilled]:(state,action)=> {
      state.isLoading = false
      const target = state.comments.data.findIndex((comment)=>
      comment.id === action.payload.id
      )
      state.comments.data.splice(target,1,action.payload)
    }

  }
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;
