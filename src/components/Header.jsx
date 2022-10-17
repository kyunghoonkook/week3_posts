import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import logo from "../img/main/logo.png";

const Header = () => {
<<<<<<< HEAD
  return (
    <StHeaderDiv>
      <StImg src={logo} alt="logoimage" />
      <StLink to={"/"}>Home</StLink>
    </StHeaderDiv>
  );
=======
  return 
>>>>>>> ae28863e3657b0ac14da134b80c48b82048703bb
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
