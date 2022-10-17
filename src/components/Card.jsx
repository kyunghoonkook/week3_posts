import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../elem/Button";
import { __deletePostThunk } from "../redux/modules/postslice";

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDeleteHandler = () => {
    dispatch(__deletePostThunk(post.id));
  };

  return (
    <StCard
      onClick={() => {
        navigate(`/posts/${post.id}`);
      }}
    >
      <CardContent>
        <CardContentLeft>
          <p>{post.title}</p>
          <p>{post.createdAt}</p>
        </CardContentLeft>
        <div>
          <Button
            onClick={(event) => {
              event.stopPropagation();
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
        </div>
      </CardContent>
    </StCard>
  );
};

export default Card;

const StCard = styled.div`
  padding: 12px 30px;
  height: 70px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 12px;
  width: 75%;
  margin: 30px auto 12px;
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
