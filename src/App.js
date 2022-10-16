import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";

/* 
"posts":[
        {
          "id":"",
          "username":"",
          "createdAt": ,
          "title":"",
          "content":"",
          },
],
"comments":[
  {
  "id":,
  "postId":,
  "username":"",
  "content":"",
  },
]
// . comments.

*/

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
  // Header: "#F38181",
  // Input: "#FCE38A",
};
