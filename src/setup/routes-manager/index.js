import DDA from "pages/Components/DDA";
import Footer from "pages/Components/Footer";
import Nav from "pages/Components/Nav";
import Home from "pages/Home";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesManager = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <DDA />
      </BrowserRouter>
    </div>
  );
};

export default RoutesManager;
