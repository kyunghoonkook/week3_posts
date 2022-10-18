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

  const details = useSelector((state)=>state.post.post);
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [title, setTitle] = useState(details.title);
  const [content,setContent] = useState(details.content);
  const editHandler = () => {
    
    dispatch(__updatePost({id,title,content, username : details.username, createdAt : details.createdAt}))
    navigate('/')
  }

  useEffect(()=>{

  },[title,content])

  useEffect(()=>{
    dispatch(__getPostById(id))
  },[])

    return (
      <>
      <Header/>
      <StFullContainer>
        <StContainer>
          <StTitleandWriter>
          <StFirst>
            <StUserTitle>
                작성자
            </StUserTitle>
            <StWriter>
              {details.username}
            </StWriter>
            <StDate>
              <span>Date : {details.createdAt}</span>
              <span onClick={()=>navigate(-1)} style={{cursor : "pointer"}}>이전</span>
            </StDate>
          </StFirst>
            <StSecond>
           <StUserTitle>
                Title
            </StUserTitle>
            <StTitle type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <StEdit>Edit</StEdit>
            <StEditComplete onClick={editHandler}>Edit Complete</StEditComplete>
          </StSecond>
          <StContent type="text" value={content} onChange={(e)=>setContent(e.target.value)}/>
          </StTitleandWriter>

        </StContainer>
      </StFullContainer>
    </>)
}

export default Edit;

  const StEditComplete = styled.div``;

  const StEdit = styled.div`
    display: flex;
    float: right;
    margin-left : 500px;
    cursor: pointer;
  `;

  const StContent = styled.input`
  background-color: #ede8e8;
  width : 400px;
  border-radius: 5px;
  width : 930px;
  height: 350px;
  margin-top : 30px;
  padding : 30px;
  display:flex;
  flex-direction: column;


  `;

  const StTitle = styled.input`
    border : none;
    background-color: #ede8e8;
    width : 250px;
    height: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left : 3px;
    margin-left: 1px;
  `;


  const StTitleandWriter = styled.div`

  `;

  const StDate = styled.div`
    border : none;
    background-color: #ede8e8;
    width : 250px;
    height: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    margin-left : 320px;
    align-items: center;
    & span {
      margin : 0 10px;
    }
  `;

  const StWriter = styled.div`
    border : none;
    background-color: #ede8e8;
    width : 250px;
    height: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left : 1px;
    margin-left: 3px;

  `;
  const StUserTitle = styled.div`
    border : none;
    background-color: #ede8e8;
    width : 80px;
    height: 25px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right : 20px;
    margin-left : 4px;

  `;

  const StFullContainer = styled.div`
    display: flex;
    align-items: center;
    height: 80vh;
  `;

  const StContainer = styled.div`
    width : 1000px;
    height: 500px;
    display: flex;
    margin : 0 auto;
    justify-content: center;
  `;

  const StFirst = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top : 20px;
  `;

  const StSecond = styled.div`
    display: flex;
    margin-top : 20px;
  `;