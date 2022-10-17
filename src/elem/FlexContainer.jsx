import React from "react";
import styled, { css } from "styled-components";
import flex from "../lib/flex";

const FlexContainer = (props) => {
  return <FlexDiv {...props}>{props.children}</FlexDiv>;
};

export default FlexContainer;

const FlexDiv = styled.div`
  width: 100%;

  //props로 받은걸 lib폴더의 flex css를 가져와서 적용시킨것.
  ${({ ai, jc, direction }) =>
    flex({
      ai,
      jc,
      direction,
    })}
`;
