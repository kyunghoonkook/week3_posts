import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../elem/Button";
import Input from "../../elem/Input";
import { __addPost } from "../../redux/modules/postslice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const initialState = {
    username: "",
    createdAt: 0,
    title: "",
    content: "",
  };
  const [postFormObj, setPostForm] = useState(initialState);

  const { username, title, content } = postFormObj;

  const onChangeFormHandler = (e) => {
    const { name, value } = e.target;
    setPostForm({ ...postFormObj, [name]: value });
  };

  const addPostFormSubmit = (e) => {
    e.preventDefault();
    setPostForm({ ...postFormObj });
    dispatch(__addPost({ ...postFormObj, createdAt: new Date().getTime() }));
    setPostForm(initialState);
  };

  return (
    <div>
      <form onSubmit={addPostFormSubmit}>
        <div>
          <div>
            <StLabel htmlFor="username">작성자</StLabel>
            <Input
              name="username"
              type="text"
              value={username}
              onChange={onChangeFormHandler}
            ></Input>
            <Button>글 작성</Button>
          </div>
          <StLabel htmlFor="title">Title</StLabel>
          <Input
            name="title"
            type="text"
            value={title}
            onChange={onChangeFormHandler}
          ></Input>
        </div>
        <textarea
          type="text"
          name="content"
          value={content}
          onChange={onChangeFormHandler}
        ></textarea>
      </form>
    </div>
  );
};

export default AddPostForm;

const StLabel = styled.label``;
