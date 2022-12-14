import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return <StButton {...props}>{props.children}</StButton>;
};

export default Button;

const StButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border: 0px solid #222;
  border-radius: 5px;
  ${({ size }) => {
    switch (size) {
      case "large":
        return css`
          width: 150px;
        `;
      case "medium":
        return css`
          width: 100px;
        `;
      case "small":
        return css`
          width: 80px;
          height: 25px;
        `;
      default:
        return css`
          width: 50px;
        `;
    }
  }};
`;
