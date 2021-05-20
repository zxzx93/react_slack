import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
// import { Search } from "@material-ui/icons";

function Header({ user, signOut }) {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="txst" placeholder="Search...." />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContiner>
        <Name>{user.name}</Name>
        <UserImage>
          <img
            src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"}
            alt=""
            onClick={signOut}
          />
        </UserImage>
      </UserContiner>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  background: #350d36;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 999;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

const Main = styled.div`
  display: flex;
  margin: 0 16px;
`;

const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`;

const Search = styled.div`
  width: 100%;
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  display: flex;
  align-items: center;

  input {
    background-color: transparent;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    color: #fff;
    padding-top: 4px;
    padding-bottom: 4px;
  }

  input:focus {
    outline: none;
  }
`;

const UserContiner = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
  padding-right: 16px;
`;

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid #ffffff;
  border-radius: 3px;
  cursor: pointer;

  img {
    width: 100%;
  }
`;
