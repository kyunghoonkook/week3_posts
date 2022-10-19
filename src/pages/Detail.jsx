import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPostById } from "../redux/modules/postSlice";
import { useNavigate, useParams } from "react-router-dom/dist";
import AddCommentForm from "../features/comments/AddCommentsForm";
import Comment from "../features/comments/Comment";
import { __getCommentById } from "../redux/modules/commentSlice";

const Detail = () => {
  const details = useSelector((state) => state.post.post);
  const commentD = useSelector((state) => state.comment.comments.data);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(__getPostById(id));
    dispatch(__getCommentById(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      <StFullContainer>
        <StContainer>
          <StTitleandWriter>
            <StFirst>
              <StUserTitle>작성자</StUserTitle>
              <StWriter>{details.username}</StWriter>
              <StDate>
                <span>
                  Date : {new Date(details.createdAt).toString().slice(0, 16)}
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
              <StUserTitle>Title</StUserTitle>
              <StTitle>{details.title}</StTitle>
            </StSecond>
            <StContent>
              <StEdit
                onClick={() => {
                  navigate(`/post/edit/${details.id}`);
                }}
              >
                Edit
              </StEdit>
              {details.content}
            </StContent>
          </StTitleandWriter>
        </StContainer>
        <AddCommentForm />
        {commentD &&
          commentD.map((com) => <Comment key={com.id} comment={com} />)}
      </StFullContainer>
    </>
  );
};

export default Detail;

const StEdit = styled.div`
  display: flex;
  float: right;
  margin-left: 850px;
  cursor: pointer;
`;

const StContent = styled.div`
  background-color: #ede8e8;
  width: 400px;
  border-radius: 5px;
  width: 930px;
  height: 350px;
  margin-top: 30px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
`;

const StTitle = styled.div`
  border: none;
  background-color: #ede8e8;
  width: 250px;
  height: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  margin-left: 1px;
`;

const StTitleandWriter = styled.div``;

const StDate = styled.div`
  border: none;
  background-color: #ede8e8;
  width: 250px;
  height: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-left: 320px;
  align-items: center;
  & span {
    margin: 0 10px;
  }
`;

const StWriter = styled.div`
  border: none;
  background-color: #ede8e8;
  width: 250px;
  height: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1px;
  margin-left: 3px;
`;
export const StUserTitle = styled.div`
  border: none;
  background-color: #ede8e8;
  width: 80px;
  height: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 4px;
`;

const StFullContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80vh;
  flex-direction: column;
  overflow: auto;
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
