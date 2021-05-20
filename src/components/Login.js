import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

function Login({ setUser }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          name: result.user.displayName,
          photo: result.user.photoURL,
        };
        localStorage.setItem("user", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <Content>
        <SlackImg src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
        <h1>Sign in Slack</h1>
        <SignInButton onClick={() => signIn()}>
          Sign In With Google
        </SignInButton>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: #fff;
  padding: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0 0 0 /12%), 0 1px 2px rgb(0, 0, 0 /24%);
`;

const SlackImg = styled.img`
  height: 100px;
`;

const SignInButton = styled.button`
  margin-top: 50px;
  background-color: #0a8d48;
  color: #fff;
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;

export default Login;
