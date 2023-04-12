import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./components/globalStyle";

import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import RoutingError from "./components/page/RoutingError/RoutingError";

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
            <Route path="*" element={<RoutingError />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
