import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Addpost from "../pages/Addpost";

import Home from "../pages/Home";
import Login from "../pages/Login";
import PrivateRoute from "../shared/PrivateRoute";
import Edit from "../pages/Edit";

const Router = () => {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setAuthenticate={setAuthenticate}
              authenticate={authenticate}
            />
          }
        />
        <Route path="/post/add" element={<Addpost />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/posts/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
        <Route path="/post/edit/:id" element={<Edit />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
