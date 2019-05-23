import React, { FC } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import DialogItem, { DialogItemProps } from 'components/DialogItem';
import { Divider, FlexRow } from 'components/CommonStyledComponents';

const ChatContainer = styled.div`
  padding-top: 75px;
  padding-left: 75px;
  padding-right: 10px;
  background-color: rgb(244, 244, 250);
`;

const Content = styled.div`
  padding-top: 20px;
  padding-left: 22px;
`;

const MainLabel = styled.div`
  font-size: 30px;
  color: black;
  font-weight: bold;
`;

const Search = styled(FlexRow)`
  margin-bottom: 25px;
`;

const DialogsList = styled.ul`
  margin: 20px 0 0;
  padding-left: 0;
  padding-right: 10px;
  list-style: none;
  max-height: 700px;
  min-height: 500px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    background: none;
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(191, 194, 203);
    border-radius: 8px;
  }
`;

const SearchIcon = styled(FaSearch)`
  font-size: 20px;
  margin-right: 12px;
`;

const ChatDivider = styled(Divider)`
  margin-right: 14px;
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
    picture: 'https://randomuser.me/api/portraits/lego/6.jpg',
    name: 'Tacos',
    message: 'Halo, Muchahos!',
    date: '04 Sep',
    notifications: 1,
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
  },
  {
    picture: 'https://randomuser.me/api/portraits/men/73.jpg',
    name: 'Beni Pelmeni',
    message: 'Do you want eat?',
    date: '17 Feb',
    notifications: 0,
    online: false
  },

  {
    picture: 'https://randomuser.me/api/portraits/women/10.jpg',
    name: 'Madonna',
    message: 'I do not know to sing :(',
    date: '05 May',
    notifications: 8,
    online: false
  },

  {
    picture: 'https://randomuser.me/api/portraits/women/19.jpg',
    name: 'Irma',
    message: 'How are you?',
    date: '30 Jan',
    notifications: 0,
    online: true
  },
  {
    picture: 'https://randomuser.me/api/portraits/men/40.jpg',
    name: 'Zamir Dubari',
    message: 'I want my tea!',
    date: '9 Sep',
    notifications: 0,
    online: false
  },
  {
    picture: 'https://randomuser.me/api/portraits/men/43.jpg',
    name: 'Tomas Edison',
    message: 'Hello My Dear Friend',
    date: '27 Apr',
    notifications: 0,
    online: false
  },

  {
    picture: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'Princess from Miami',
    message: 'Good bye!!!!!!!',
    date: '15 Dec',
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
          <SearchIcon />
          <div>Search</div>
        </Search>
        <ChatDivider />
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
