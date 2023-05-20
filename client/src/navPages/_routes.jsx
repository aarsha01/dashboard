import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AboutPage from "../Pages/Dashboard/about";
import Dashboard from '../Pages/Dashboard/Dashboard';

const NavRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/********* Add different routes here *************/}
        {/* 
        <Route path="/about/another_page" element ={<another_page/>} />
        */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<AboutPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default NavRoutes;
