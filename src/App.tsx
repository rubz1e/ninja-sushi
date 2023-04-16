import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';

import Header from './components/common/Header/Header';
import Category from './components/common/HeaderCategory/Category';
import RoutingError from './components/pages/RoutingError/RoutingError';
import Main from './components/pages/Main/Main';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Category />
          <Routes>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Main />} />

            <Route path="*" element={<RoutingError />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
