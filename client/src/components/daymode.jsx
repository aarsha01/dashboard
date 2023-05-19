import "./daymode.scss";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
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
      console.log(data[0]?.Day_Mode);

      if(data.length > 0){
        
        setData(data)
      } 
    }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">Day Mode</span>
        <span className="counter">
       { data[0]?.Day_Mode}
        </span>
      
      </div>
      <div className="right">
       
        < WbSunnyIcon className="icon"/>
      </div>
      
     </div>
  );
};

export default Widget;






