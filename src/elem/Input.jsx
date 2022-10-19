import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StInput {...props} required={true} />;
};

export default Input;

const StInput = styled.input.attrs((props) => ({
  maxLength: props.maxLen,
  minLength: props.minLen,
}))`
  width: ${(props) => props.wd || "300px"};
  border: ${(props) => props.bdThinkness || "0px"} solid #444;
  border-radius: 5px;
  padding: 5px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  margin: ${(props) => props.mg};
`;
