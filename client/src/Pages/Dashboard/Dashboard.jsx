import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Chart from '../../components/Chart'
import BatChart from '../../components/battery.jsx'
import DonutChart from '../../components/donutchart'
import { Box, Grid } from '@mui/material'
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
import HistoryChart from '../../components/HistoryChart'

function Dashboard({ filterQuery }) {

  const [data, setData] = useState([])
  console.log(filterQuery);

  useEffect(() => {
    fetchData()
  }, [filterQuery])

  const fetchData = async () => {
    const data = await callApi('data/fetch_data', filterQuery)
    setData(data)
    console.log('Data fetched');
    console.log(data)
    // setTimeout(fetchData,5000)
  }

  // this is a temporrary data created to display line chart
  const data1 =
    [
      {
        "id": "Zone",
        "color": "hsl(181, 70%, 50%)",
        "data": [
          {
            "x": "Zone 2 ",
            "y": 1
          },
          {
            "x": "Zone 1",
            "y": 4
          },

        ]
      },
    ]

  return (
    // <DashboardLayout>
    <Box padding={2} height={'83vh'}>
      <Grid container spacing={.5} height={'100%'}>
        <Grid item xs={4} height={'50%'}>
          <DonutChart data={data?.CMS_STATUS} />
        </Grid>
        <Grid item xs={1.5} height={'50%'}>
          <BoxWidget
            data={[data?.DAY_MODE, data?.NIGHT_MODE, data?.BATT_COUNT]}
            metaData={[WbSunnyIcon, DarkModeIcon, BatteryFullIcon]}
            title={'Mode'}
          />
        </Grid>
        <Grid item xs={1.5} height={'50%'}>
          <BoxWidget
            data={data?.DATA_CONN}
            metaData={[WifiIcon, SettingsInputHdmiIcon, SignalCellularAltIcon]}
            title={'Connectivity'}
          />
        </Grid>
        <Grid item xs={5} height={'50%'}>
          <Chart data={data?.ZONE} filterQuery={filterQuery} />
        </Grid>
        <Grid item xs={4} height={'50%'}>
          <Ticket />
        </Grid>
        <Grid item xs={8} height={'50%'}>
          <HistoryChart data={data1}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard