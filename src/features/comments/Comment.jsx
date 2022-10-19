import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { __deleteComment, __getComment, __getCommentAll, __getCommentById, __updateComment } from "../../redux/modules/commentSlice";

const Comment = ({comment}) => {
  const commentData = useSelector((state)=>state.comment.comments.data)
  const [isEdit,setIsEdit] = useState(false);
  const [reply,setReply] = useState(comment.content)
  const dispatch = useDispatch();
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
   
  },[dispatch,id])
  const contentHandler = (e) =>{
    setReply(e.target.value)
    // dispatch(__getComment(comment.id))
  }

  const deleteHandler = () =>{
    dispatch(__deleteComment(comment.id))
  }

  const updataHandler = () =>{
    if(reply.trim() == ''){
      alert("댓글을 입력해주세요!")
    }else{setIsEdit(!isEdit)
      dispatch(__updateComment({
        username : comment.username,
        content : reply,
        id : comment.id,
        postId : comment.postId
      }))}
    
  }

  return (
    <>
    {isEdit ? (<>
    <StCommentContainer>
      <StCommentAdd>
        <StWriteDiv>
          {comment.username}
        </StWriteDiv>
      <StCommentEdit type="text" value={reply} onChange={contentHandler}/>
      {<StAddButton onClick={updataHandler}>저장</StAddButton>}
      <StDeleteButton onClick={deleteHandler}>삭제</StDeleteButton>
      </StCommentAdd> 
    </StCommentContainer>
    </>) : (<StCommentContainer>
      <StCommentAdd>
        <StWriteDiv>
          {comment.username}
        </StWriteDiv>
      <StCommentDiv>
          {comment.content}
      </StCommentDiv> 
      {<StAddButton onClick={()=>setIsEdit(!isEdit)}>편집</StAddButton>}
      <StDeleteButton onClick={deleteHandler}>삭제</StDeleteButton>
      </StCommentAdd> 
    </StCommentContainer>)}
    
    </>
  );
};

export default Comment;

const StCommentEdit = styled.input`
    width : 600px;
    height: 25px;
    display:flex;
    vertical-align:middle;
    margin-left : 30px;
    border-radius: 10px;
    border-style: none;
`;

const StWriteDiv = styled.div`
    width: 80px;
    border-radius: 10px;
    border-style: none;
    margin-left : 20px;
    height: 25px;
    line-height: 25px;


`;

const StDeleteButton = styled.button`
    border-style: none;
    margin-left: 30px;
    font-size : 16px;
    background-color: #ede8e8;
    cursor: pointer;

`;

const StAddButton = styled.button`
  border-style: none;
  margin-left : 50px;
  font-size : 16px;
  background-color: #ede8e8;
  cursor: pointer;

`;

const StCommentAdd = styled.div`
  width: 930px;
  height: 40px;
  display: flex;
  margin : 0 auto;
  line-height: 40px;
  align-items: center;

  & span{
    margin-left : 30px;

  }


`;

const StCommentContainer = styled.div`
    display : flex;
    gap:30px;
    background-color: #ede8e8;
    border-radius: 10px;
    margin-top : 10px;
    
`;

const StCommentDiv = styled.div`
    width : 600px;
    height: 25px;
    display:flex;
    vertical-align:middle;
    margin-left : 30px;
    border-radius: 10px;
    border-style: none;
    align-items: center;

`;