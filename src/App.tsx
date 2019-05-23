import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import 'App.css';

import TopTrends from 'components/TopTrends';
import TrendList from 'components/TrendList';
import Menu from 'components/Menu';
import Chat from 'components/Chat';
import DialogWindow from 'components/DialogWindow';
import { FlexCenter, FlexRow, Grid } from 'components/CommonStyledComponents';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Varela Round', sans-serif;
    background-color: rgb(236, 238, 243);
    font-size: 13px;
    color: rgb(133, 140, 152)
  }
`;

const ChatContainer = styled(Grid)`
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 5fr 8fr;
`;

const EmptySpace = styled.div`
  height: 200px;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <FlexCenter>
        <FlexRow>
          <TopTrends />
          <TrendList />
        </FlexRow>
      </FlexCenter>
      <EmptySpace />
      <ChatContainer>
        <Menu />
        <Chat />
        <DialogWindow />
      </ChatContainer>
    </div>
  );
};

export default App;
