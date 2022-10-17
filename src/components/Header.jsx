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
  margin-right: 30px;
`;

const StImg = styled.img`
  width: 200px;
  height: 120px;
`;
