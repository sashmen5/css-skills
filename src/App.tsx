import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import 'App.css';
import TopTrends from 'components/TopTrends';
import TrendList from 'components/TrendList';
import { FlexRow, Grid } from 'components/CommonStyledComponents';
import Menu from 'components/Menu';
import Chat from './components/Chat';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Varela Round', sans-serif;
  }
`;

const ChatContainer = styled(Grid)`
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 5fr 1fr;
  font-size: 14px;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        {/*<FlexRow>*/}
        {/*  <TopTrends />*/}
        {/*  <TrendList />*/}
        {/*</FlexRow>*/}

        <ChatContainer>
          <Menu />
          <Chat />
          <div />
        </ChatContainer>
      </header>
    </div>
  );
};

export default App;
