import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Chart from '../../components/Chart'
import BatChart from '../../components/battery.jsx'
import DonutChart from '../../components/donutchart'
import { Grid } from '@mui/material'
import BoxWidget from '../../components/BoxWidget'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WifiIcon from '@mui/icons-material/Wifi';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';
import callApi from '../../helper/callApi'
import { useOutletContext } from 'react-router-dom'
import Ticket from '../../components/tickets'
import Alert from '../../components/alert'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';

function Dashboard({data, filterQuery}) {
  
  
  
  if(data){
    return (
      // <DashboardLayout>
      <div className='dashboard-top'>
  
        <div className="chart-box-top">
          <Grid container spacing={3}>

          <Grid item xs={4}>
              <DonutChart data={data?.CMS_STATUS}/>
            </Grid>
            
            <Grid item container xs={3} spacing={2} >
              
              <Grid item xs={6}>
                
              <BoxWidget 
              data={[data?.DAY_MODE,data?.NIGHT_MODE,data?.BATT_COUNT]} 
              metaData={[WbSunnyIcon,DarkModeIcon,BatteryFullIcon]} 
              title={'MODE'}
             />
              </Grid>
              <Grid item xs={6}>
                <BoxWidget 
                  data={data?.DATA_CONN} 
                  metaData={[WifiIcon,SettingsInputHdmiIcon,SignalCellularAltIcon]}
                  title={'Connectivity'} 
                />
              </Grid>


             
            </Grid>
            <Grid item xs={5}>
              <Chart data={data?.ZONE} filterQuery={filterQuery} />
            </Grid>
            
            


            

            
            <Grid item xs={4}>
              <Ticket/>
             
            </Grid>
            {/* <Alert open={open} setOpen={setOpen} OFFLINE={data.CMS_STATUS?.OFFLINE} /> */}
          </Grid>
        </div>
      </div>
    )
  }
}

export default Dashboard