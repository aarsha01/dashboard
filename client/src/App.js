import React, { useEffect, useMemo, useState } from 'react';
import {BrowserRouter, Route, Routes, useOutletContext} from 'react-router-dom'
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
import AlertLayout from './components/AlertLayout';
import callApi from './helper/callApi';
import Zoneform from './Pages/Form.jsx/Zoneform';
import BranchListing from './Pages/Listing/BranchListing';
import UserForm from './Pages/Form.jsx/UserForm';
import RoleAuth from './components/RoleAuth';
import UnAuthorized from './components/UnAuthorized';
import configVariables from './Constants/configVariables';
import SignIn from './Pages/Form.jsx/LoginForm';

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])
  const filterQuery = useOutletContext()
  const [data, setData] = useState({
    ZONE: {},
    CMS_STATUS: {},
    DATA_CONN: {},
    BATT_COUNT:[],
    DAY_MODE: [],
    NIGHT_MODE: [],
  })
  const [open ,setOpen]=useState(false)
  useEffect(() => {
    fetchData(filterQuery)
  }, [filterQuery])

  const fetchData = async (filterQuery)=>{
    const data = await callApi('data/fetch_data',filterQuery)
    if(data.CMS_STATUS.OFFLINE > 0){
      setOpen(true)
    }
    setData(data)
  }
  return (

    //  <NavRoutes />
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {/* Common route for navbar */}
           
            <Route element={<AlertLayout data={data} open={open} setOpen={setOpen}/>}>
            <Route element={<SidebarLayout />}>
             
                {/* Common  route for all users */}     
                {/* View only permission */}
              <Route element={<RoleAuth allowedRoles={[configVariables.role_superadmin,configVariables.role_admin,configVariables.role_user]} />}>
                <Route element={<DropdownLayout />} >
                  <Route path='/' exact element={<Dashboard />} />
                  <Route path='/event/:key/:value' exact element={<GraphDetails />} />
                </Route> 
              </Route> 

              {/* Common route for admins */}
              <Route element={<RoleAuth allowedRoles={[configVariables.role_superadmin,configVariables.role_admin]} />}>
              <Route path ='/branch_form' element={<BranchForm />} />
              <Route path ='/device_form' element={<DeviceForm/>}/>
              <Route path ='/allDevices' element={<DeviceListing />}/>
              <Route path ='/allBranches' element={<BranchListing />}/>
              <Route path ='/marquee_form' element={<MarqueeForm />} />
              <Route path ='/zone_form' element={<Zoneform />} />
              </Route>

              {/* Routes accessible to only SuperAdmins : Editing of forms*/}
              <Route element={<RoleAuth allowedRoles={[configVariables.role_superadmin]} />}>
              <Route path ='/device_form/:id' element={<DeviceForm/>}/>
              <Route path ='/branch_form/:id' element={<BranchForm/>}/>
              <Route path ='/user_form' element={<UserForm />} />
              </Route>

            </Route>
            <Route path ='/unauthorized' element={<UnAuthorized/>}/>
            <Route path ='/login_page' element={<SignIn/>}/>

            </Route>


          
          </Routes>
        </ThemeProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;