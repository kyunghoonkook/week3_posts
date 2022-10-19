import React, { useState } from "react";
import Input from "../../elem/Input";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../../redux/modules/commentSlice";


const AddCommentForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const commentData = useSelector((state)=>state.comment.comments.data)
  const detailData = useSelector((state)=>state.post.post)
  const initialState = {
    username : '',
    content : '',
    id : '',
    postId : detailData.id,
  }
  const [data,setData] = useState(initialState)
  const{username, content, postId} = data

  const onChangeHandler = (e) => {
    const {name, value} = e.target
    setData({...data,[name] : value, postId : parseInt(id)})
  }
  const onAddHandler = () =>{
    if(data.username.trim() ==='' || data.content.trim() === ''){
      alert("빈칸을 입력해주세요")
    }else{
      dispatch(__addComment(data))
      setData({
        username :'',
        content : ''
      })
    }
  }
  return (
    <>
    <StCommentContainer>
      <StCommentAdd>
        <StWriteInput name="username" value={username || ''} type='text' placeholder="작성자" onChange={onChangeHandler} maxLength={4}/>
      <CommentInput type='text' name="content" value={content || ''} placeholder="댓글을 입력해주세요" onChange={onChangeHandler}/> 
      <StAddButton onClick={onAddHandler}>추가</StAddButton>
      <StDeleteButton>삭제</StDeleteButton>
      </StCommentAdd> 
    </StCommentContainer>
    </>
  );
};

export default AddCommentForm;

const StWriteInput = styled.input`
    width: 80px;
    border-radius: 10px;
    border-style: none;
    margin-left : 20px;
    height: 25px;
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
`;

const CommentInput = styled.input`
    width : 600px;
    height: 25px;
    display:flex;
    vertical-align:middle;
    margin-left : 30px;
    border-radius: 10px;
    border-style: none;

`;


