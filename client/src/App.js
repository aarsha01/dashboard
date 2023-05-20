
import React, { useMemo } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
<<<<<<< HEAD
import NavRoutes from "./navPages/_routes";
import "./styles/main.bundle.css";
=======
import Dashboard from './Pages/Dashboard/Dashboard';
import BranchForm from './Pages/Form.jsx/BranchForm';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { themeSettings } from './theme';
>>>>>>> 97862e820ae45b49c59667c04b924c7525d11be8

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
<<<<<<< HEAD
     <NavRoutes />
=======
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
>>>>>>> 97862e820ae45b49c59667c04b924c7525d11be8
  );
}

export default App;
