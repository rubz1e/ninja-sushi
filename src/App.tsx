import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './components/globalStyle';
import Header from './components/Header/Header';
import Category from './components/Category/Category';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Category />
      </BrowserRouter>
    </>
  );
}

export default App;
