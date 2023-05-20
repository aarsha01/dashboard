
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavRoutes from "./navPages/_routes";
import "./styles/main.bundle.css";

function App() {
  return (
     <NavRoutes />
  );
}

export default App;
