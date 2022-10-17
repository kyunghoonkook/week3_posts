import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import logo from "../img/main/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeaderDiv>
      <StImg src={logo} alt="logoimage" onClick={() => navigate("/")} />
      <StLink to={"/"}>Home</StLink>
    </StHeaderDiv>
  );
};

export default Header;

const StHeaderDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.mainC};
`;

const StLink = styled(Link)`
  margin-right: 40px;
  text-decoration: none;
  color: #fff;
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

const StImg = styled.img`
  cursor: pointer;
  width: 200px;
  height: 120px;
`;
