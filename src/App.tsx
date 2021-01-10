import { EntryRoute } from './presentation/routes/EntryRoute';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './resources/GlobalStyle';
import { Navigation } from './presentation/components/Navigation';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navigation />
      <EntryRoute />
    </BrowserRouter>
  );
}

export default App;
