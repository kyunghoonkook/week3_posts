import React from "react";
import Layout from "../components/Layout";
import Home from "./Home";
import styled from "styled-components";

const Detail = () => {
  return (
    <StFullContainer>
      <StContainer>
        <StTitleandWriter>
          <StFirst>
            <StUserTitle>제목</StUserTitle>
            <StWriter></StWriter>
            <StDate>
              <span>Date</span>
              <span>이전</span>
            </StDate>
          </StFirst>
          <StSecond>
            <StUserTitle>Title</StUserTitle>
            <StTitle></StTitle>
          </StSecond>
          <StContent>zzz</StContent>
        </StTitleandWriter>
      </StContainer>
    </StFullContainer>
  );
};
export default Detail;

const StContent = styled.div`
  background-color: #ede8e8;
  width: 400px;
  border-radius: 5px;
  width: 930px;
  height: 350px;
  margin-top: 30px;
  padding: 30px;
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
`;
const StUserTitle = styled.div`
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
