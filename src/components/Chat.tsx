import React, { FC } from 'react';
import styled from 'styled-components';
import { Divider, FlexRow } from './CommonStyledComponents';
import { MdSearch } from 'react-icons/md';
import DialogItem, { DialogItemProps } from './DialogItem';

const ChatContainer = styled.div`
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 10px;
  background-color: rgb(241, 241, 253);
`;

const Content = styled.div`
  padding-top: 30px;
  padding-left: 10px;
`;

const MainLabel = styled.div`
  font-size: 25px;
`;

const Search = styled(FlexRow)``;

const DialogsList = styled.ul`
  padding-top: 15px;
  padding-left: 0;
  list-style: none;
`;

const dialogs: DialogItemProps[] = [
  {
    picture: 'https://randomuser.me/api/portraits/women/4.jpg',
    name: 'Hurin omar',
    message: 'Sure 8:pm',
    date: '02 Feb',
    notifications: 5,
    online: true
  },
  {
    picture: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Peter Abiba',
    message: 'early prototype of product',
    date: '02 Feb',
    notifications: 1,
    online: false
  },
  {
    picture: 'https://randomuser.me/api/portraits/men/46.jpg',
    name: 'Johny Ivy',
    message: 'Hello',
    date: '02 Feb',
    notifications: 3,
    online: false
  },
  {
    picture: 'https://randomuser.me/api/portraits/women/22.jpg',
    name: 'Ofra Meri',
    message: 'Where are you?',
    date: '12 Feb',
    notifications: 0,
    online: true
  }
];

const Chat: FC = () => {
  return (
    <ChatContainer>
      <MainLabel>Chat</MainLabel>
      <Content>
        <Search>
          <MdSearch />
          <div>Search</div>
        </Search>
        <Divider />
        <DialogsList>
          {dialogs.map((item, index) => (
            <DialogItem key={item.picture + index} {...item} />
          ))}
        </DialogsList>
      </Content>
    </ChatContainer>
  );
};

export default Chat;
