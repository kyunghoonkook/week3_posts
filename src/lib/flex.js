import { css } from "styled-components";

//flex변수에  flex에관한 css자체를 담아 놓았음
const flex = ({ jc = "center", ai = "center", direction = "row" }) => {
  return css`
    display: flex;
    align-items: ${ai};
    justify-content: ${jc};
    flex-direction: ${direction};
  `;
};

export default flex;
