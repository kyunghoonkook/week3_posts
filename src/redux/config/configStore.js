import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import posts from "../modules/postsSlice";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { comments, posts, post },
});

export default store;
