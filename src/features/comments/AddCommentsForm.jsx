import React, { useState } from "react";
import Input from "../../elem/Input";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __addComment } from "../../redux/modules/commentSlice";

const AddCommentForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comment.comments.data);
  const detailData = useSelector((state) => state.post.post);
  const initialState = {
    username: "",
    content: "",
    id: "",
    postId: detailData.id,
  };
  const [data, setData] = useState(initialState);
  const { username, content, postId } = data;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value, postId: parseInt(id) });
  };
  const onAddHandler = () => {
    if (data.username.trim() === "" || data.content.trim() === "") {
      alert("빈칸을 입력해주세요");
    } else {
      dispatch(__addComment(data));
      setData({
        username: "",
        content: "",
      });
    }
  };
  return (
    <>
      <StCommentContainer>
        <StCommentAdd>
          <StBtnWrap>
            <StWriteInput
              name="username"
              value={username || ""}
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={onChangeHandler}
            />
            <StAddButton onClick={onAddHandler}>댓글쓰기</StAddButton>
          </StBtnWrap>

          <CommentInput
            type="text"
            name="content"
            value={content || ""}
            placeholder="댓글을 입력해주세요"
            onChange={onChangeHandler}
          />
        </StCommentAdd>
      </StCommentContainer>
    </>
  );
};

export default AddCommentForm;

const StCommentContainer = styled.div`
  display: flex;
  width: 930px;
  height: 170px;
  border: 1px solid #eee;
  gap: 30px;
  background-color: #fff;
  border-radius: 10px;
`;

const StWriteInput = styled.input`
  width: 160px;
  height: 30px;
  padding: 5px;
  border: 1px solid #eee;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 20px;
  padding-left: 10px;
  ::placeholder {
    font-size: 12px;
  }
`;
const StBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CommentInput = styled.textarea`
  border: 1px solid #eee;
  margin-top: 20px;
  max-width: 870px;
  min-width: 870px;
  max-height: 80px;
  min-height: 80px;
  margin-left: 30px;
  border-radius: 10px;
  padding: 10px;
`;

const StAddButton = styled.button`
  margin-right: 30px;
  margin-top: 20px;
  width: 80px;
  height: 30px;
  line-height: 20px;
  color: #fff;
  border-radius: 5px;
  text-align: center;
  background-color: #043249;
`;

const StCommentAdd = styled.div`
  width: 930px;
  height: 170px;
  display: flex;
  margin: 0 auto;
  line-height: 40px;
  align-items: space-around;
  flex-direction: column;

  & span {
    margin-left: 30px;
  }
`;
