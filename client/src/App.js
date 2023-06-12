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
            
            <Route element={<DropdownLayout />} >
              <Route path='/' exact element={<Dashboard data={data} />} />
              <Route path='/event/:key/:value' exact element={<GraphDetails />} />
            </Route> 
            <Route path ='/branch_form' element={<BranchForm />} />
            <Route path ='/device_form/:id' element={<DeviceForm/>}/>
            <Route path ='/device_form' element={<DeviceForm/>}/>
            <Route path ='/allDevices' element={<DeviceListing />}/>
            <Route path ='/marquee_form' element={<MarqueeForm />} />
          
          </Route>
         
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