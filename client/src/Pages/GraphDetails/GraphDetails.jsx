import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import callApi from '../../helper/callApi';
import { Table, TableHead, TableBody, TableRow, TableCell, Box, Button, Grid, ToggleButtonGroup, ToggleButton, Stack } from '@mui/material';

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
import tick from '../../images/tick.png'
import wrong from '../../images/wrong.png'


const images = {
  wifi: wifi,
  eth0: wire,
  gsm: gsm,
  N: night,
  D: sun
}

function Row(item_prop) {

  const { item } = item_prop;
  const [open, setOpen] = React.useState(false);
  const [modeValue, setmodeValue] = useState('day')

  const handleChangeMode = (e, newMode) => {
    setmodeValue(newMode)
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
        <TableCell>{item.Branch_Name || ''}</TableCell>
        <TableCell>{item.Code || ''}</TableCell>
        <TableCell>{item.Region || ''}</TableCell>
        <TableCell>{item.Hub || ''}</TableCell>
        <TableCell>{item.Alarm || ''}</TableCell>
        <TableCell><img src={images[item.Net_Con]} alt='' style={{ width: '25px', height: '25px' }} /></TableCell>
        <TableCell><img src={images[item.Op_Mode] || ''} alt='' style={{ width: '25px', height: '25px' }} /></TableCell>
        <TableCell>{
          [...Array(8)].map(i => (
            item[`ZONE_${i}`] ? <span style={{ display: 'inline-block', width: '7px', height: '7px', marginRight: '5px', backgroundColor: "#008000" }} /> : <span style={{ display: 'inline-block', width: '7px', height: '7px', marginRight: '5px', backgroundColor: "#F00" }} />
          ))
        }</TableCell>
        <TableCell>{item.Bat_Voltage || ''}</TableCell>
        <TableCell>{item.Last_Updated ? new Date(item.Last_Updated).toISOString().slice(0, 10) : ''}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ padding: '0' }} colSpan={11}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Grid container spacing={2} padding={3} width='100%'>
              <Grid item xs={3}>
                <Paper variant='chartBox'>
                  <Typography variant="largeBold" gutterBottom component="div" color="black">
                    ALARM PANEL
                  </Typography>
                  <Stack gap={1}>
                    <TableContainer>
                      <Stack direction={'row'} alignItems={'center'} gap={1}>
                        <Typography variant='mediumBold'>Change Mode:</Typography>
                        <ToggleButtonGroup color="primary" exclusive aria-label="Platform" value={modeValue} onChange={handleChangeMode} size='small'>
                          <ToggleButton value="night">Night</ToggleButton>
                          <ToggleButton value="day">Day</ToggleButton>
                        </ToggleButtonGroup>
                      </Stack>
                    </TableContainer>
                    <TableRow><Typography variant='mediumBold'>Device ID: </Typography>{item.Device_ID}</TableRow>
                    <TableRow><Typography variant='mediumBold'>Installed On: </Typography>{item.Date_0f_Installation}</TableRow>
                    <TableRow><Typography variant='mediumBold'>Hardware Version: </Typography> {item.Hardware_Version}</TableRow>
                    <TableRow><Typography variant='mediumBold'>Software Version: </Typography>{item.Software_Version}</TableRow>
                    <TableRow><Typography variant='mediumBold'>No. of Zones: </Typography>??</TableRow>
                    <TableRow><Typography variant='mediumBold'>Access Code: </Typography><Button variant="contained" >View Code</Button></TableRow>
                    <TableRow>
                      <Grid container spacing={1}>
                        <Grid item xs={6}><Button variant="contained" color="secondary" fullWidth >Reverse Alarm</Button></Grid>
                        <Grid item xs={6}><Button variant="contained" color="secondary" fullWidth>Reset Alarm</Button></Grid>
                        <Grid item xs={6}><Button variant="contained" color="error" fullWidth>Edit</Button></Grid>
                        <Grid item xs={6}><Button variant="contained" color="success" fullWidth >History</Button></Grid>
                      </Grid>
                    </TableRow>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper variant='chartBox'>
                  <Stack height={'100%'} justifyContent={'space-between'}>
                    <div>
                      <Typography variant="largeBold" gutterBottom component="div" color="black">
                        NETWORKS
                      </Typography>
                      <Stack gap={1}>
                        <Box padding={1} border={1} sx={{ background: '#adadad', borderRadius: '3px' }} borderColor={'#9f9f9f'}>
                          <Stack direction={'row'} gap={1} mb={1}>
                            <Button variant="contained" color="secondary">Check Network</Button>
                            <Stack direction={'row'} gap={1}>
                              <Stack direction={'row'} alignItems={'center'} gap={.5}>
                                <img src={wifi} alt='' style={{ width: '30px', height: '30px' }} />
                                <img src={tick} alt="" />
                              </Stack>
                              <Stack direction={'row'} alignItems={'center'} gap={.5}>
                                <img src={wire} alt='' style={{ width: '30px', height: '30px' }} />
                                <img src={tick} alt="" />
                              </Stack>
                              <Stack direction={'row'} alignItems={'center'} gap={.5}>
                                <img src={gsm} alt='' style={{ width: '30px', height: '30px' }} />
                                <img src={wrong} alt="" />
                              </Stack>
                            </Stack>
                          </Stack>
                          <Typography variant='smallBold'>Laste Updated: <span style={{ color: 'green' }}>5 mins ago</span></Typography>
                        </Box>
                        <TableRow><Typography variant='mediumBold'>IP Address: </Typography>{item.IP_Address}</TableRow>
                        <TableRow><Typography variant='mediumBold'>Modem: </Typography>??</TableRow>
                        <TableRow>
                          <Stack direction={'row'} gap={2} alignItems={'center'}>
                            <span><Typography variant='mediumBold'>WiFi-SSID: </Typography>{item.WIFI_SSID}</span>
                            <Button variant="contained" color="error">View Password</Button>
                          </Stack>
                        </TableRow>
                        <TableRow><Typography variant='mediumBold'>GSM SIgnal: </Typography>??</TableRow>
                        <TableRow><Typography variant='mediumBold'>GSM Number: </Typography>{item.GSM_Number}</TableRow>
                      </Stack>
                    </div>
                    <TableRow sx={{ width: '50%' }}>
                      <Button variant="contained" color="error" fullWidth>Edit</Button>
                    </TableRow>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper variant='chartBox'>
                  <Typography variant="largeBold" gutterBottom component="div" color="black">
                    ZONES
                  </Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Zone</TableCell>
                        <TableCell>Sensor Types</TableCell>
                        <TableCell>History</TableCell>
                        <TableCell>L.S Change</TableCell>
                        <TableCell>Model</TableCell>
                        <TableCell>Active/Bypass</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>
                </Paper>
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

