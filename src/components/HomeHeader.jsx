import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const HomeHeader = () => {
  return (
    <HomeHeaderWrap>
      <HomeHeaderListWrap>
        <HomeHeaderList>
          <StLink to="/">Home</StLink>
        </HomeHeaderList>
        <HomeHeaderList>
          <StLink to="/post/add">Write</StLink>
        </HomeHeaderList>
        <HomeHeaderList>
          <StLink to="/post/add">Login</StLink>
        </HomeHeaderList>
      </HomeHeaderListWrap>
    </HomeHeaderWrap>
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
    margin-left: 700px;
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
`;
