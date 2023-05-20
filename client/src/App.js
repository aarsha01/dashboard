
import React, { useMemo } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import NavRoutes from "./navPages/_routes";
import "./styles/main.bundle.css";

import Dashboard from './Pages/Dashboard/Dashboard';
import BranchForm from './Pages/Form.jsx/BranchForm';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { themeSettings } from './theme';
<<<<<<< HEAD
// import { DashboardLayout } from './navbar/Layout';
import SidebarLayout from './components/SidebarLayout';
import './App.css'
=======
import DeviceForm from './Pages/Form.jsx/DeviceForm';
>>>>>>> a247bbf44516e968c9c1a6e91fd980a05d3c303a

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (

    //  <NavRoutes />
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
<<<<<<< HEAD
            {/* Common route for navbar */}
            <Route element={<SidebarLayout />}>
              <Route path='/' exact element={<Dashboard />} />
              <Route path='/branch_form' element={<BranchForm />} />
            </Route>
=======
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/branch_form' element={<BranchForm />} />
            <Route path ='/device_form' element={<DeviceForm/>}/>
>>>>>>> a247bbf44516e968c9c1a6e91fd980a05d3c303a
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
