
import React, { useMemo } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard';
import BranchForm from './Pages/Form.jsx/BranchForm';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { themeSettings } from './theme';
import DeviceForm from './Pages/Form.jsx/DeviceForm';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/branch_form' element={<BranchForm />} />
            <Route path ='/device_form' element={<DeviceForm/>}/>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
