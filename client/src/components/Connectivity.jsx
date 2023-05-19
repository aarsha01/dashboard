import "./Connectivity.scss";
import WifiIcon from '@mui/icons-material/Wifi';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import BluetoothSearchingIcon from '@mui/icons-material/BluetoothSearching';
import React, { useEffect, useState } from 'react'
import callApi from '../helper/callApi'

const Widget = () => {

    const [data, setData] = useState([])

    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = async ()=>{
      const data = await callApi('data/fetch_DataConn')
      console.log(data);
      console.log(data[0]?.Day_Mode);

      if(data.length > 0){
        
        setData(data)
      } 
    }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">WIFI</span>
        <span className="counter">
       { data[0]?.WIFI}
        </span>
        
      </div>
      <div className="right">
       
        < WifiIcon className="icon"/>
      </div>
       
        <div className="left">
        <span className="title">ETHERNET</span>
        <span className="counter">
       { data[0]?.ETHERNET}
        </span>
       
      </div>
      <div className="right">
       
        < SettingsInputHdmiIcon className="icon"/>
      </div>
      <div className="left">
        <span className="title">BLUETOOTH</span>
        <span className="counter">
       { data[0]?.BLUETOOTH}
        </span>
       
      </div>
      <div className="rightbluetooth">
       
        <  BluetoothSearchingIcon  className="icon"/>
      </div>
     </div>

  );
};

export default Widget;






