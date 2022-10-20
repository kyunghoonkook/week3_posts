import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/commentSlice";
import posts from "../modules/postsSlice";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { comment, posts, post },
  // devTools 끄기
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
