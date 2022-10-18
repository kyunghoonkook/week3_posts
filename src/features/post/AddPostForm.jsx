import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elem/Button";
import FlexContainer from "../../elem/FlexContainer";
import Input from "../../elem/Input";
import Label from "../../elem/Label";
import Wrapper from "../../elem/Wrapper";
import useInput from "../../hooks/useInput";
import { __addPost } from "../../redux/modules/postsSlice";

const AddPostForm = () => {
  const maxLen = (value) => value.length < 10;
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
    if (
      username.trim() === "" ||
      title.trim() === "" ||
      content.trim() === ""
    ) {
      alert("내용을 입력하세요");
    } else {
      setPostForm({ ...postFormObj });
      dispatch(__addPost({ ...postFormObj, createdAt: new Date().getTime() }));
      setPostForm(initialState);
      navigate("/");
    }
  };

  return (
    <StFullContainer jc="center" ai="center">
      <StForm onSubmit={addPostFormSubmit}>
        <Wrapper mg="20px 0">
          <FlexContainer>
            <FlexContainer jc="flex-start">
              <Label htmlFor="username" wd="80px" hg="25px" mg="0 25px 0 0">
                작성자
              </Label>
              <Input
                name="username"
                type="text"
                value={username}
                onChange={onChangeFormHandler}
                bgColor="#ede8e8"
                maxLen="20"
                wd="250px"
              ></Input>
            </FlexContainer>
            <Button bgColor="#ede8e8" size="small">
              글 작성
            </Button>
          </FlexContainer>
        </Wrapper>
        <Wrapper mg="0 0 20px 0">
          <FlexContainer jc="flex-start">
            <Label htmlFor="title" wd="80px" hg="25px" mg="0 25px 0 0">
              Title
            </Label>
            <Input
              name="title"
              type="text"
              value={title}
              onChange={onChangeFormHandler}
              bgColor="#ede8e8"
              maxLen="40"
              wd="250px"
            ></Input>
          </FlexContainer>
        </Wrapper>

        <StTextarea
          type="text"
          name="content"
          value={content}
          onChange={onChangeFormHandler}
          bgColor="#ede8e8"
        ></StTextarea>
      </StForm>
    </StFullContainer>
  );
};

export default AddPostForm;

const StFullContainer = styled(FlexContainer)`
  height: 80vh;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 930px;
  height: 500px;
`;
const StTextarea = styled.textarea`
  display: flex;
  height: 100%;
  padding: 20px;
  background-color: ${(props) => props.bgColor};
  border-radius: 5px;
  border: 0px;
`;
