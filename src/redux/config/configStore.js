import { configureStore } from "@reduxjs/toolkit";
import comment from "../modules/commentSlice";
import posts from "../modules/postsSlice";
import post from "../modules/postSlice";

const store = configureStore({
  reducer: { comment, posts, post },
});

export default store;
