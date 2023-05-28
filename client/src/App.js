import React, { useMemo } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import NavRoutes from "./navPages/_routes";
import "./styles/main.bundle.css";

import Dashboard from './Pages/Dashboard/Dashboard';
import BranchForm from './Pages/Form.jsx/BranchForm';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline, createTheme } from '@mui/material';
import { themeSettings } from './theme';
import SidebarLayout from './components/SidebarLayout';
import './App.css'
import DeviceForm from './Pages/Form.jsx/DeviceForm';
import DropdownLayout from './components/Dropdownlayout';
import GraphDetails from './Pages/GraphDetails/GraphDetails';
import DeviceListing from './Pages/Listing/DeviceListing';

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
                <Route path='/event/:key/:value' exact element={<GraphDetails />} />
              </Route> 
              <Route path='/branch_form' element={<BranchForm />} />
              <Route path ='/device_form/:id' element={<DeviceForm/>}/>
              <Route path ='/allDevices' element={<DeviceListing />}/>
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