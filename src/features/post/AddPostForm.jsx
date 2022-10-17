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
        <div>
          <StDiv jc="space-between" mg="20px auto" wd="930px">
            <StDiv ai="center" hg="25px">
              <StLabel htmlFor="username" wd="80px" hg="25px" mg="0 24px 0 0">
                작성자
              </StLabel>
              <Input
                name="username"
                type="text"
                value={username}
                onChange={onChangeFormHandler}
                bgColor="#ede8e8"
                maxLen="20"
              ></Input>
            </StDiv>
            <Button bgColor="#ede8e8">글 작성</Button>
          </StDiv>

          <StDiv ai="center" mg="0 0 30px 0">
            <StLabel htmlFor="title" wd="80px" hg="25px" mg="0 24px 0 0">
              Title
            </StLabel>
            <Input
              name="title"
              type="text"
              value={title}
              onChange={onChangeFormHandler}
              bgColor="#ede8e8"
              maxLen="40"
            ></Input>
          </StDiv>
        </div>
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

const StDiv = styled.div`
  display: flex;
  justify-content: ${(props) => props.jc};
  align-items: ${(props) => props.ai};
  margin: ${(props) => props.mg};
  width: ${(props) => props.wd};
`;

const StLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.textBoxC};
  border-radius: 5px;
  width: ${(props) => props.wd};
  height: ${(props) => props.hg};
  margin: ${(props) => props.mg};
`;

const StFullContainer = styled(StDiv)`
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
