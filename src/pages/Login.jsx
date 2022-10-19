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
            <h3>User Login</h3>
            <label></label>
            <input type="text" placeholder="Username" />
            <label></label>
            <input type="password" placeholder="Password" />
          </div>

          <Button type="submit">Log in</Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 350px;
  height: 200px;
  border: 1px solid #eee;
  margin: 200px auto;
  padding: 120px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  div {
    input {
      border-radius: 0px;
      border: 1px solid #eee;
      color: #333;
      width: 200px;
      height: 30px;
      padding: 5px;
      margin-bottom: 10px;
    }
    input::placeholder {
      padding: 5px;
      color: #333;
    }
    h3 {
      margin-bottom: 10px;
    }
  }
`;
const Button = styled.button`
  cursor: pointer;
  width: 150px;
  padding: 5px;
  color: #fff;
  background-color: #043249;
`;
