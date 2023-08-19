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
import dateFormat from "dateformat";

// import WifiIcon from '@mui/icons-material/Wifi';
// import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
// import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';
import sun from '../../images/sun.png'
import night from '../../images/night.png'
import wifi from '../../images/wifi.png'
import wire from '../../images/wire.png'
import gsm from "../../images/4G.png"

function Row(item_prop) {

  const { item } = item_prop;
  const [open, setOpen] = React.useState(false);
  console.log(item);

  function validateData(column) {

    if (column === "Branch_Name") {
      return (item.Branch_Name.toLowerCase() !== null ? item.Branch_Name : ' ')
    }

    if (column === "Code") {
      return (item.Code.toLowerCase() !== null ? item.Code : ' ')
    }

    if (column === "Region") {
      return (item.Region.toLowerCase() !== null ? item.Region : ' ')
    }

    if (column === "Hub") {
      return (item.Hub.toLowerCase() !== null ? item.Hub : ' ')
    }

    if (column === "Alarm") {
      return (item.Hub.toLowerCase() !== null ? item.Hub : ' ')
    }

    if (column === "Connectivity_Type") {
      return (item.Connectivity_Type === null ? '' :
             item.Connectivity_Type.toLowerCase() === "wifi" ? 
                    <img src={wifi} alt='' style={{ width: '25px', height: '25px' }} /> : 
                    item.Connectivity_Type.toLowerCase() === "eth0"?
                    <img src={wire} alt='' style={{ width: '25px', height: '25px' }} />:
                    <img src={gsm}  alt=''style={{ width: '25px', height: '25px' }} />
              )
    }

    if (column === "Op_Mode"){
      return (item.Op_Mode === null ? '' : 
      item.Op_Mode.toLowerCase() === "night" ? 
      <img src={night} alt='' style={{ width: '25px', height: '25px' }} /> : 
      <img src={sun}  alt=''style={{ width: '25px', height: '25px' }} />
    )
    }

    if (column === "Zones"){
      return ([item.ZONE_1 === 0 ?
            <span style={{display: 'inline-block',width: '7px',height: '7px',marginRight: '5px',backgroundColor: "#008000", //green for active
            }}>
            </span> :
            <span style={{display: 'inline-block',width: '7px',height: '7px',marginRight: '5px',backgroundColor: "#F00", //red for bypass
            }}>
            </span>

            ,item.ZONE_2 === 0 ?
            <span style={{display: 'inline-block',width: '7px',height: '7px',marginRight: '5px',backgroundColor: "#008000", //green for active
            }}>
            </span> :
            <span style={{display: 'inline-block',width: '7px',height: '7px',marginRight: '5px',backgroundColor: "#F00", //red for bypass
            }}>
            </span>]
            )
    }


    if (column === "Bat_Voltage"){
      return (
        item.Bat_Voltage !== null ? item.Bat_Voltage : ' '
      )
    }

    if (column === "Last_Updated"){
      return ( dateFormat(item.Last_Updated,"dd/mm/yyyy"))
    }

  }

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
        <TableCell>{validateData("Branch_Name")}</TableCell>
        <TableCell>{validateData("Code")}</TableCell>
        <TableCell>{validateData("Region")}</TableCell>
        <TableCell>{validateData("Hub")}</TableCell>
        <TableCell>{validateData("Alarm")}</TableCell>
        <TableCell>{validateData("Connectivity_Type")}</TableCell>
        <TableCell>{validateData("Op_Mode")}</TableCell>
        <TableCell>{validateData("Zones")}</TableCell>
        <TableCell>{validateData("Bat_Voltage")}</TableCell>
        <TableCell>{validateData("Last_Updated")}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '0' }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={2} padding={3} width='100%'>
              <Grid item>
                <Box
                  sx={{
                    // width: '100%',
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
              <Grid item>
                <Box
                  sx={{
                    // width: '100%',
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
                    <img src={wifi} alt='' style={{ width: '15px', height: '15px' }} /> 
                    {/* <img src={wire} alt='' style={{ width: '15px', height: '15px' }} /> */}
                    {/* <img src={gsm} alt='' style={{ width: '15px', height: '15px' }} /> */}
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
              <Grid item>
                <Box
                  sx={{
                    // width: '150%',
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

  const { key, value, filter_key, filter_value } = useParams();
  const fetchGraphData = async () => {
    const response = await callApi('data/graph_details', { key, value, filter_key, filter_value });
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
                <TableCell>Alarm</TableCell>
                <TableCell>Connectivity</TableCell>
                <TableCell>Modes</TableCell>
                <TableCell>Zones</TableCell>
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

