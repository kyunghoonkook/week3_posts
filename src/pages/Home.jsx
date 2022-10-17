import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import HomeItemList from "../features/home/HomeItemList";
import bg from "../img/main/bg.png";
const Home = ({children}) => {
  return (
    <>
      <Layout>
        <StContainer>
          <img src={bg} alt="backgroundimage" />
          <StMain>
            <HomeItemList />
            {children}
          </StMain>
        </StContainer>
      </Layout>
    </>
  );
};

export default Home;

const StContainer = styled.div`
  display: flex;
  width: 100%;
`;

const StMain = styled.div`
  margin-left: 50px;
`;
