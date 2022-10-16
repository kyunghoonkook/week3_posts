import styled from "styled-components";
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
      <Router />
    </>
  );
}

export default App;
