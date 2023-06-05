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
import MarqueeForm from './Pages/Form.jsx/MarqueeForm';
import Zoneform from './Pages/Form.jsx/Zoneform';
import BranchListing from './Pages/Listing/BranchListing';
import UserForm from './Pages/Form.jsx/UserForm';
import RoleAuth from './components/RoleAuth';
import UnAuthorized from './components/UnAuthorized';

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
                {/* Common  route for all users */}
              <Route element={<RoleAuth allowedRoles={['SuperAdmin','Admin','User']} />}>
              <Route path='/' exact element={<Dashboard />} />
              <Route path='/event/:key/:value' exact element={<GraphDetails />} />
              </Route> 
              </Route> 

              {/* Common route for admins */}
              <Route element={<RoleAuth allowedRoles={['SuperAdmin','Admin']} />}>
              <Route path ='/branch_form' element={<BranchForm />} />
              <Route path ='/device_form' element={<DeviceForm/>}/>
              <Route path ='/allDevices' element={<DeviceListing />}/>
              <Route path ='/allBranches' element={<BranchListing />}/>
              <Route path ='/marquee_form' element={<MarqueeForm />} />
              <Route path ='/zone_form' element={<Zoneform />} />
              <Route path ='/user_form' element={<UserForm />} />
              </Route>

              {/* Routes accessible to only SuperAdmins */}
              <Route element={<RoleAuth allowedRoles={['SuperAdmin']} />}>
              <Route path ='/device_form/:id' element={<DeviceForm/>}/>
              <Route path ='/branch_form/:id' element={<BranchForm/>}/>
              </Route>

            </Route>
            <Route path ='/unauthorized' element={<UnAuthorized/>}/>

          </Routes>
        </ThemeProvider>
        <Routes>
            
        </Routes> 
  
      </BrowserRouter>
    </div>
  );
}

export default App;