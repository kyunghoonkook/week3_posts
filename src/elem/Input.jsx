import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return <StInput {...props} required={true} />;
};

export default Input;

const StInput = styled.input`
  width: 300px;
  border: 1px solid #444;
  border-radius: 10px;
  padding: 5px;
`;
