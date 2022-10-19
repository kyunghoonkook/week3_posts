import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../elem/Button";
import { __deletePostThunk } from "../redux/modules/postsSlice";
import { __getComment } from "../redux/modules/commentSlice";

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
            <p>{new Date(post.createdAt).toString().slice(0, 25)}</p>
          </CardContentLeft>
          <div></div>
        </CardContent>
      </StCard>
      <StNewButton
        onClick={() => {
          const result = window.confirm("이 게시글을 지울까요?");
          if (result) {
            return onDeleteHandler();
          } else {
            return;
          }
        }}
      >
        <span> 🗑</span>
      </StNewButton>
    </StCardContainer>
  );
};

export default Card;

const StCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 30px;
  height: 70px;
  border: 2px solid #ddd;
  background-color: #fff;
  border-radius: 5px;
  width: 75%;
  margin: 30px auto 12px;
  transition: all 0.3s;
  :hover {
    box-shadow: 2px 2px 15px -5px rgba(0, 0, 0, 0.44);
    border: 2px solid ${(props) => props.theme.subC};
  }
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

const rotate = keyframes` 
0%{
  transform: rotate(0) scale(1);
}
15%{
  transform: rotate(30deg) scale(0.9);
}
35%{ 
  transform: rotate(0) scale(3);
}
75%{
  transform: rotate(-30deg) scale(0.9);
}
100%{
  transform: rotate(0)  scale(1);
}
`;

const StNewButton = styled(Button)`
  transition: ease-in-out 0.3s;
  font-size: 30px;
  border-radius: 3px;
  :hover {
    animation: ${rotate} 1.5s ease-in-out infinite;
    color: #fff;
    background-color: ${(props) => props.theme.subC};
  }
`;
