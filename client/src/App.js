import React, { useMemo } from 'react';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import NavRoutes from "./navPages/_routes";
import "./styles/main.bundle.css";

import Dashboard from './Pages/Dashboard/Dashboard';
import BranchForm from './Pages/Form.jsx/BranchForm';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { themeSettings } from './theme';
// import { DashboardLayout } from './navbar/Layout';
import SidebarLayout from './components/SidebarLayout';
import './App.css'
import DeviceForm from './Pages/Form.jsx/DeviceForm';

// import DropdownComponent from './components/dropdown';
import DropdownLayout from './components/Dropdownlayout';
import Label from './components/label';
import GraphDetails from './Pages/GraphDetails/GraphDetails';
function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  return (

    //  <NavRoutes />
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Common route for navbar */}
            <Route element={<SidebarLayout />}>
              <Route element={<DropdownLayout />} >
                <Route path='/' exact element={<Dashboard />} />
                <Route path='/event/:id' exact element={<GraphDetails />} />
              </Route> 
              <Route path='/branch_form' element={<BranchForm />} />
              <Route path ='/device_form' element={<DeviceForm/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
        <Routes>
            
        </Routes> 
  
      </BrowserRouter>
    </div>
  );
}

export default App;