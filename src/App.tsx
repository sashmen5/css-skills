import React from 'react';
import { createGlobalStyle } from 'styled-components';

import 'App.css';
import TopTrends from 'components/TopTrends';
import TrendList from 'components/TrendList';
import { FlexRow } from 'components/CommonStyledComponents';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Varela Round', sans-serif;
  }
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <FlexRow>
          <TopTrends />
          <TrendList />
        </FlexRow>
      </header>
    </div>
  );
};

export default App;
