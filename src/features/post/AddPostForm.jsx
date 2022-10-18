import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../elem/Button";
import FlexContainer from "../../elem/FlexContainer";
import Input from "../../elem/Input";
import Label from "../../elem/Label";
import Wrapper from "../../elem/Wrapper";
import useForm from "../../hooks/useForm";
import useInput from "../../hooks/useInput";
import { __addPost } from "../../redux/modules/postsSlice";

const AddPostForm = () => {
  const { values, errors, submitting, handleChange, handleSubmit } = useForm({
    initialValues: { username: "", createdAt: 0, title: "", content: "" },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      alert("작성한 내용을 포스팅 합니다.");
    },
    // validate,
    __addPost,
  });

  return (
    <StFullContainer jc="center" ai="center">
      <StForm onSubmit={handleSubmit}>
        <Wrapper mg="20px 0">
          <FlexContainer>
            <FlexContainer jc="flex-start">
              <Label htmlFor="username" wd="80px" hg="25px" mg="0 25px 0 0">
                작성자
              </Label>
              <Input
                name="username"
                type="text"
                value={values.username}
                onChange={handleChange}
                bgColor="#ede8e8"
                maxLen="20"
                wd="250px"
                mg="0 10px 0 0"
                className={errors.username && "errorInput"}
              ></Input>
              {errors.username && (
                <span className="errorMessage">{errors.username}</span>
              )}
            </FlexContainer>
            <Button
              bgColor="#ede8e8"
              size="small"
              // type이 submit이어야 disabled가 작동한다
              type="submit"
              disabled={submitting}
            >
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
              value={values.title}
              onChange={handleChange}
              bgColor="#ede8e8"
              maxLen="40"
              wd="250px"
              mg="0 10px 0 0"
              className={errors.title && "errorInput"}
            ></Input>
            {errors.title && (
              <span className="errorMessage">{errors.title}</span>
            )}
          </FlexContainer>
        </Wrapper>

        <StTextarea
          type="text"
          name="content"
          value={values.content}
          onChange={handleChange}
          bgColor="#ede8e8"
          placeholder={errors.content || "내용을 작성해 주세요"}
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
