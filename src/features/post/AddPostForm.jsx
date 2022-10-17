import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elem/Button";
import Input from "../../elem/Input";
import { __addPost } from "../../redux/modules/postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    navigate("/");
  };

  return (
    <StFullContainer jc="center" ai="center">
      <StForm onSubmit={addPostFormSubmit}>
        <div>
          <StDiv jc="space-between" mg="20px auto" wd="930px">
            <div>
              <StLabel htmlFor="username">작성자</StLabel>
              <Input
                name="username"
                type="text"
                value={username}
                onChange={onChangeFormHandler}
              ></Input>
            </div>
            <Button bgColor="#ede8e8">글 작성</Button>
          </StDiv>
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
      </StForm>
    </StFullContainer>
  );
};

export default AddPostForm;

const StDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  margin: ${(props) => props.mg};
  width: ${(props) => props.wd};
`;

const StLabel = styled.label`
  background-color: ${(props) => props.theme.textBoxC};
  border-radius: 5px;
`;

const StFullContainer = styled(StDiv)`
  height: 80vh;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  height: 500px;
`;
const StTextarea = styled.textarea``;
