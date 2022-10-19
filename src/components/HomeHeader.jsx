import React from "react";

import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const HomeHeader = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  return (
    <>
      <HomeHeaderWrap>
        <HomeHeaderListWrap>
          <HomeHeaderList>
            <StLink to="/">Home</StLink>
          </HomeHeaderList>
          <HomeHeaderList>
            <StLink to="/post/add">Write</StLink>
          </HomeHeaderList>
          <HomeHeaderList>
            {authenticate ? (
              <div onClick={() => setAuthenticate(false)}>
                <StLink>로그아웃</StLink>
              </div>
            ) : (
              <div onClick={() => navigate("/login")}>
                <StLink>로그인</StLink>
              </div>
            )}
          </HomeHeaderList>
        </HomeHeaderListWrap>
      </HomeHeaderWrap>
    </>
  );
};

export default HomeHeader;
const HomeHeaderWrap = styled.div``;

const HomeHeaderListWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const HomeHeaderList = styled.div`
  margin-top: 35px;
  font-size: 20px;
  list-style: none;
  margin-right: 50px;

  :last-child {
    width: 80px;
    margin-left: 650px;
    @media screen and (max-width: 874px) {
      margin-left: 500px;
    }
    @media screen and (max-width: 728px) {
      margin-left: 350px;
    }
  }
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: #232323;
  position: relative;

  ::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    bottom: -5px;
    background-color: #f17d38;
    transition: all 0.5s;
    position: absolute;
    left: 0%;
  }
  :hover::after {
    width: 50%;
  }
  @media screen and (max-width: 1024px) {
    color: #fff;
    font-size: 16px;
  }
  @media screen and (max-width: 874px) {
    font-size: 14px;
  }
`;
