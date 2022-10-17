import React, { useEffect } from "react";
import Card from "../../components/Card";
import HomeHeader from "../../components/HomeHeader";
import { __getPostThunk } from "../../redux/modules/postsSlice";
import { useDispatch, useSelector } from "react-redux";

const HomeItemList = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);

  console.log(posts);
  return (
    <div>
      <HomeHeader />
      {posts?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};

export default HomeItemList;
