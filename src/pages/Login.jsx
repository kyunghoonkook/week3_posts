import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <>
      <Header />
      <Container>
        <Form onSubmit={login}>
          <div>
            <label></label>
            <input type="text" placeholder="ID" />
            <label></label>
            <input type="password" placeholder="Password" />
          </div>

          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  border: none;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  margin: 300px auto;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    input {
      background-color: #232232;
      border-radius: 10px;
      color: #fff;
      width: 200px;
      height: 30px;
      padding: 5px;
      margin-bottom: 10px;
    }
    input::placeholder {
      padding: 5px;
      color: #fff;
    }
  }
`;
const Button = styled.button`
  cursor: pointer;
  width: 150px;
  border-radius: 10px;
  padding: 5px;
  background-color: #fff;
`;
