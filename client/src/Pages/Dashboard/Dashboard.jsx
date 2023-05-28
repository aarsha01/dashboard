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


function Dashboard() {

  const filterQuery = useOutletContext()
  const [data, setData] = useState({
    ZONE: {},
    CMS_STATUS: {},
    DATA_CONN: {},
    BATT_COUNT:[],
    DAY_MODE: [],
    NIGHT_MODE: [],
  })

  useEffect(() => {
    fetchData(filterQuery)
  }, [filterQuery])

  const fetchData = async (filterQuery)=>{
    const data = await callApi('data/fetch_data',filterQuery)
    setData(data)
  }
  
  return (
    // <DashboardLayout>
    <div className='dashboard-top'>

      <div className="chart-box-top">
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Chart data={data.ZONE} />
          </Grid>
          <Grid item container xs={6} spacing={2} >
            <Grid item xs={4}>
              <BoxWidget data={data.DAY_MODE} metaData={[{title:'Day Mode', Icon:WbSunnyIcon}]} />
            </Grid>
            <Grid item xs={4}>
              <BoxWidget data={data.NIGHT_MODE} metaData={[{title:'Night Mode', Icon:DarkModeIcon}]} />
            </Grid>
            <Grid item xs={4}>
              <BatChart data={data.BATT_COUNT} />
            </Grid>
            <Grid item xs={12}>
              <BoxWidget 
                data={data.DATA_CONN} 
                metaData={[
                  {title:'Wifi', Icon:WifiIcon},
                  {title:'Ethernet', Icon:SettingsInputHdmiIcon},
                  {title:'Bluetooth', Icon:BluetoothSearchingIcon},
                ]} 
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <DonutChart data={data.CMS_STATUS}/>
          </Grid>
          <Grid item xs={6}>
            <Ticket/>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Dashboard