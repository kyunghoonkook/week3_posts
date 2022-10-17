import { configureStore } from "@reduxjs/toolkit";
// import comments from "../modules/commentsSlice";
import posts from "../modules/postsSlice";

const store = configureStore({
  reducer: { posts },
});

export default store;
