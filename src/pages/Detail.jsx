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
              <StTitle>{details.title}</StTitle>
            </StSecond>
            <StContent>
              <StEdit
                onClick={() => {
                  navigate(`/post/edit/${details.id}`);
                }}
              >
                수정
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
  margin-left: 850px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #043249;
  width: 50px;
  text-align: center;
  padding: 5px;
  transition: all 0.5s;
  :hover {
    transition: all 0.5s;
    color: #fff;
    border: 1px solid transparent;
    background-color: #043249;
  }
`;

const StContent = styled.div`
  width: 930px;
  height: 350px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 13px;
`;

const StTitle = styled.div`
  border: none;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  padding-bottom: 13px;
  width: 930px;
  height: 25px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-left: 3px;
  font-size: 22px;
`;

const StTitleandWriter = styled.div``;

const StDate = styled.div`
  border: none;
  width: 250px;
  height: 25px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  margin-left: 320px;
  align-items: center;
  & span {
    margin: 0;
  }
  & span:last-child {
    width: 80px;
    height: 30px;
    line-height: 30px;
    margin-left: 15px;
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
// export const StUserTitle = styled.div`
//   border: none;
//   background-color: #ede8e8;
//   width: 80px;
//   height: 25px;
//   border-radius: 5px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-right: 20px;
//   margin-left: 4px;
// `;

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
