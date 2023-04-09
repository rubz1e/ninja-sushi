import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { GlobalStyle } from './components/globalStyle';

import Header from './components/Header/Header';

import About from './components/pages/About/About';
import Delivery from './components/pages/Delivery/Delivery';
import Home from './components/pages/Home/Home';
import News from './components/pages/News/News';
import Favorite from './components/pages/Favorite/Favorite';
import Account from './components/pages/Account/Account';
import Basket from './components/pages/Basket/Basket';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/account" element={<Account />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
