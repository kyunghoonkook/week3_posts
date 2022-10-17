import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../elem/Button";
import { __deletePostThunk } from "../redux/modules/postsSlice";

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDeleteHandler = () => {
    dispatch(__deletePostThunk(post.id));
  };

  return (
    <StCardContainer>
      <StCard
        onClick={() => {
          navigate(`/posts/${post.id}`);
        }}
      >
        <CardContent>
          <CardContentLeft>
            <p>{post.title}</p>
            {/* <p>{post.createdAt.toJson()}</p> */}
          </CardContentLeft>
          <div></div>
        </CardContent>
      </StCard>
      <Button
        onClick={() => {
          const result = window.confirm("이 할일을 지울까요?");
          if (result) {
            return onDeleteHandler();
          } else {
            return;
          }
        }}
      >
        지우기
      </Button>
    </StCardContainer>
  );
};

export default Card;

const StCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 30px;
  height: 70px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  width: 75%;
  margin: 30px auto 12px;
`;
const StCard = styled.div`
  width: 100%;
  cursor: pointer;
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CardContentLeft = styled.div`
  p:last-child {
    margin-top: 2px;
    font-size: 12px;
  }
`;
