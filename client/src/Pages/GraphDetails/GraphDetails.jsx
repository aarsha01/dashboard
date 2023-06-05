import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import callApi from '../../helper/callApi';
import { Table, TableHead, TableBody, TableRow, TableCell, Box, Button, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';

import WifiIcon from '@mui/icons-material/Wifi';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';

function Row(item_prop) {

  const { item } = item_prop;

  const [open, setOpen] = React.useState(false);

  console.log("123");
  console.log(item);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{item.Branch_Name}</TableCell>
        <TableCell>{item.Code}</TableCell>
        <TableCell>{item.Region}</TableCell>
        <TableCell>{item.Hub}</TableCell>
        <TableCell>{item.Connectivity_Type}</TableCell>
        <TableCell>{item.Bat_Voltage}</TableCell>
        <TableCell>{item.Last_Updated}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: 'grey',
                    color: 'white',
                    p: 2,
                  }}
                >
                  <Typography variant="h4" gutterBottom component="div" color="white">
                    ALARM PANEL
                  </Typography>
                  <TableContainer>
                    Change Mode:
                    <ToggleButtonGroup color="primary"
                      exclusive
                      aria-label="Platform">
                      <ToggleButton value="web">Night</ToggleButton>
                      <ToggleButton value="android">Day</ToggleButton>
                    </ToggleButtonGroup>
                  </TableContainer>
                  <TableRow>Device ID:{item.Device_ID}</TableRow>
                  <TableRow>Installed On:{item.Date_0f_Installation}</TableRow>
                  <TableRow>Hardware Version: {item.Hardware_Version}</TableRow>
                  <TableRow>Software Version:{item.Software_Version}</TableRow>
                  <TableRow>No. of Zones: ??</TableRow>
                  <TableRow>Access Code:<Button variant="contained" >View Code</Button></TableRow>
                  <TableRow>
                    <Button variant="contained" color="secondary">Reverse Alarm</Button>
                    <Button variant="contained" color="secondary">Reset Alarm</Button>
                  </TableRow>
                  <TableRow>
                    <Button variant="contained" color="error" >Edit</Button>
                    <Button variant="contained" color="success" >History</Button>
                  </TableRow>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    bgcolor: 'grey',
                    color: 'white',
                    p: 2,

                  }}
                >
                  <Typography variant="h4" gutterBottom component="div" color="white">
                    NETWORK
                  </Typography>
                  <TableContainer>
                    <Button variant="contained" color="secondary">Check Network</Button>
                    <WifiIcon/>
                    <BluetoothSearchingIcon/>
                    <SettingsInputHdmiIcon/>
                  </TableContainer>
                  <TableRow>IP Address: {item.IP_Address}</TableRow>
                  <TableRow>Modem: ??</TableRow>
                  <TableRow>WiFi-SSID{item.WIFI_SSID} <Button variant="contained" color="error">View Password</Button></TableRow>
                  <TableRow>GSM SIgnal: ??</TableRow>
                  <TableRow>GSM Number:{item.GSM_Number}</TableRow>
                  <TableRow>

                  </TableRow>
                  <TableRow>

                    <Button variant="contained" color="error">   Edit</Button>
                  </TableRow>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box
                  sx={{
                    width: '150%',
                    height: '100%',
                    bgcolor: 'grey',
                    color: 'white',
                    p: 2,
                  }}
                >
                  <Typography variant="h4" gutterBottom component="div" color="white">
                    ZONES
                  </Typography>
                  <TableHead>
                    <TableCell>Zone</TableCell>
                    <TableCell>Sensor Types</TableCell>
                    <TableCell>History</TableCell>
                    <TableCell>L.S Change</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Active/Bypass</TableCell>
                  </TableHead>
                </Box>
              </Grid>
            </Grid>

          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


export default function GraphDetails() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetchGraphData();
  }, []);

  const { key, value } = useParams();
  const fetchGraphData = async () => {
    const response = await callApi('data/graph_details', { key, value });
    console.log(response);
    if (response.devices && response.branches && response.datas) {
      const combinedData = combineData(response.devices, response.branches, response.datas);
      // console.log(combinedData);
      setData(combinedData);
    }
  };

  const combineData = (devices, branches, form) => {
    const combined = [];
    form.map((data, i) => {
      const device = devices[i] || {};
      const branch = branches[i] || {};
      const forms = data || {};
      combined.push({ ...device, ...branch, ...forms });
    })
    console.log("combined")
    console.log(combined);
    return combined;
  };

  return (
    // <Box width='100%'>
    <>
      {data.length > 0 && (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell> </TableCell>
                <TableCell>Branch Name</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Hub</TableCell>
                <TableCell>Connectivity</TableCell>
                <TableCell>Battery Voltage</TableCell>
                <TableCell>Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map((item, index) => (
                  <Row key={index} item={item} />
                ))
              }

            </TableBody>
          </Table>
        </TableContainer >
      )}
    </>

  );
}

