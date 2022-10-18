import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import HomeItemList from "../features/home/HomeItemList";
import bg from "../img/main/bg.png";

const Home = ({ authenticate, setAuthenticate, children }) => {
  return (
    <>
      <Layout>
        <StContainer>
          <ImgWrap>
            <Img />
          </ImgWrap>

          <StMain>
            <HomeItemList
              setAuthenticate={setAuthenticate}
              authenticate={authenticate}
            />
            {children}
          </StMain>
        </StContainer>
      </Layout>
    </>
  );
};

export default Home;

const ImgWrap = styled.div`
  width: 840px;
  height: 100%;
`;
const Img = styled.div`
  background-image: url(${bg});
  width: 100%;
  height: 100%;
`;
const StContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const StMain = styled.div`
  margin-left: 50px;
  @media screen and (max-width: 1024px) {
    background-color: #043249;
    margin-left: 0px;
    padding-left: 50px;
  }
`;
