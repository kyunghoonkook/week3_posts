import React from "react";
import Header from "../components/Header";
import Layout from "../components/Layout";
import AddPostForm from "../features/post/AddPostForm";

const Addpost = () => {
  return (
    <>
      <Header />
      <Layout>
        <AddPostForm />
      </Layout>
    </>
  );
};

export default Addpost;
