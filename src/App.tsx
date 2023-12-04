import React from 'react';

import GlobalStyle from './styles/global';
import Main from './pages/Main';
import MobilePage from './pages/MobilePage';
import { useMediaQuery } from './hooks/mediaQuery';

function App() {
  const largeScreensAndAbove = useMediaQuery(
    `only screen and (min-width: 112rem)`
  );

  return (
    <>
      {largeScreensAndAbove ? <Main /> : <MobilePage />}
      <GlobalStyle />
    </>
  );
}

export default App;
