
import React, { useMemo } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavRoutes from "./navPages/_routes";
import "./styles/main.bundle.css";

import Dashboard from './Pages/Dashboard/Dashboard';
import BranchForm from './Pages/Form.jsx/BranchForm';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { themeSettings } from './theme';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (

     <NavRoutes />
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/branch_form' element={<BranchForm />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
