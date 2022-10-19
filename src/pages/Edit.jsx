import React, { useState } from "react";
import Layout from "../components/Layout";
import Home from "./Home";
import styled from "styled-components";
import Header from "../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPostById, __updatePost } from "../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom/dist";
import Input from "../elem/Input";

const Edit = () => {
  const details = useSelector((state) => state.post.post);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState(details.title);
  const [content, setContent] = useState(details.content);
  const editHandler = () => {
    dispatch(
      __updatePost({
        id,
        title,
        content,
        username: details.username,
        createdAt: details.createdAt,
      })
    );
    navigate("/");
  };

  useEffect(() => {}, [title, content]);

  useEffect(() => {
    dispatch(__getPostById(id));
  }, []);

  return (
    <>
      <Header />
      <StFullContainer>
        <StContainer>
          <StTitleandWriter>
            <StFirst>
              <StWriter>{details.username}</StWriter>
              <StDate>
                <span>
                  {new Date(details.createdAt).toString().slice(0, 16)}
                </span>
                <span
                  onClick={() => navigate(-1)}
                  style={{ cursor: "pointer" }}
                >
                  이전
                </span>
              </StDate>
            </StFirst>
            <StSecond>
              <StTitle
                placeholder="제목"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <STEditBox>
                <StEditComplete onClick={editHandler}>수정하기</StEditComplete>
              </STEditBox>
            </StSecond>
            <StContent
              required
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </StTitleandWriter>
        </StContainer>
      </StFullContainer>
    </>
  );
};

export default Edit;

const STEditBox = styled.div`
  display: flex;
  float: right;
  margin-left: 400px;
  cursor: pointer;
`;

const StEditComplete = styled.div`
  width: 80px;
  height: 30px;
  line-height: 30px;
  margin-left: 205px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  background-color: #043249;
`;

const StContent = styled.textarea`
  max-width: 1020px;
  min-width: 1020px;
  border: 1px solid #eee;
  height: 350px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
  margin-top: 20px;
`;

const StTitle = styled.input`
  border: none;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  width: 330px;
  height: 45px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 3px;
  font-size: 18px;
`;

const StTitleandWriter = styled.div``;

const StDate = styled.div`
  border: none;
  width: 270px;
  height: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-left: 320px;
  align-items: center;
  & span {
    margin: 0px;
  }
  & span:last-child {
    width: 90px;
    height: 30px;
    line-height: 30px;
    color: #fff;
    border-radius: 5px;
    text-align: center;
    background-color: #043249;
  }
`;

const StWriter = styled.div`
  border: none;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
  width: 150px;
  height: 25px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 3px;
`;

const StFullContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
`;

const StContainer = styled.div`
  width: 1000px;
  height: 500px;
  display: flex;
  margin: 0 auto;
  justify-content: center;
`;

const StFirst = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StSecond = styled.div`
  display: flex;
  margin-top: 20px;
`;
