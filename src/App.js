import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";

// {
//   "posts": [
//     {
//       "username": "",
//       "createdAt": 0,
//       "title": "",
//       "content": ""
//     }
//   ],
//   "comments": [
//     {
//       "postId": 0,
//       "username": "",
//       "content": "",
//       "createdAt": 0
//     }
//   ]
// }

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

const theme = {
  mainC: "#043249",
  subC: "#F17D38",
  textBoxC: "#ede8e8",
};
