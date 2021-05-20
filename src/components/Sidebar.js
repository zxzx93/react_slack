import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddIcon from "@material-ui/icons/Add";
import db from "../firebase";
import { useHistory } from "react-router-dom";

import { SidebarItemsData } from "../data/SidebarData";

function Sidebar({ rooms }) {
  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      history.push(`/room/${id}`);
    }
  };

  const addChannels = () => {
    const promptName = prompt("hi");

    console.log(promptName);
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  return (
    <Container>
      <WorkspaceContainer>
        <Name>vicky</Name>

        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContainer>

      <MainChannels>
        {SidebarItemsData.map((item, index) => (
          <MainChannelItems key={index}>
            {item.icon}
            {item.text}
          </MainChannelItems>
        ))}
      </MainChannels>

      <ChannelContainer>
        <NewChannelContainer>
          <div>Channels</div>
          <AddIcon onClick={() => addChannels()} />
        </NewChannelContainer>

        <ChannelsList>
          {rooms.map((item) => (
            <Channel key={item.id} onClick={() => goToChannel(item.id)}>
              #{item.name}
            </Channel>
          ))}
        </ChannelsList>
      </ChannelContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #400d40;
`;

const WorkspaceContainer = styled.div`
  color: #fff;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 19px;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div`
  padding-right: 16px;
`;

const NewMessage = styled.div`
  background-color: #fff;
  width: 36px;
  height: 36px;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelItems = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  cursor: pointer;
  padding-left: 19px;

  :hover {
    background: #350d36;
  }
`;

const ChannelContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 28px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelsList = styled.div``;

const Channel = styled.div`
  display: flex;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover {
    background: #350d36;
  }
`;
