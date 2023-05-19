import "./nightmode.scss";
 import DarkModeIcon from '@mui/icons-material/DarkMode';
 import React, { useEffect, useState } from 'react'
import callApi from '../helper/callApi'

const Widget = () => {

    const [data, setData] = useState([])

    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = async ()=>{
      const data = await callApi('data/fetch_daydata')
      console.log(data);
      console.log(data[0]?.Night_Mode);

      if(data.length > 0){
        
        setData(data)
      } 
    }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">Night Mode</span>
        <span className="counter">
       { data[0]?.Night_Mode}
        </span>
        {/* <span className="link"></span> */}
      </div>
      <div className="right">
        
        < DarkModeIcon className="icon"/>
      </div>
      
     </div>
  );
};

export default Widget;






