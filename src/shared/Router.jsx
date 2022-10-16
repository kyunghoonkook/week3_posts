import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Addpost from "../pages/Addpost";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Detail />} />
        <Route path="/post/add" element={<Addpost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
