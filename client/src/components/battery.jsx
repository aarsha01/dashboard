import React, { useEffect, useState } from 'react'
import BatteryGauge from 'react-battery-gauge'
import callApi from '../helper/callApi'


function BatteryChart() {

    const [data, setData] = useState([])

    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = async ()=>{
      const data = await callApi('data/fetch_opdata')
      console.log(data);
      console.log(data[0]?.Battery_Mode);

      if(data.length > 0){
        
        setData(data)
      } 
    }

  const styles = {
    batteryBody: {
      strokeWidth: 1,
      cornerRadius: 3,
      fill: 'none',
      strokeColor: 'brown',
      orientation:'vertical'
    },
    batteryCap: {
      fill: 'none',
      strokeWidth: 1,
      strokeColor: 'brown',
      cornerRadius: 2,
      capToBodyRatio: 0.3
    },
    batteryMeter: {
      fill: 'rgba(36, 255, 0, 0.75)',
       lowBatteryValue: 0,
       lowBatteryFill: 'red',
    
      outerGap: 1,
      noOfCells: 10, // more than 1, will create cell battery
      interCellsGap: 2
    },
    readingText: {
      lightContrastColor: 'brown',
      darkContrastColor: 'brown',
    //  lowBatteryColor: 'red',
      fontFamily: 'inherit',
      fontSize: 14,
      showPercentage: false
    },
 
  }
  
  return  (
    <div  >
    <BatteryGauge 
      value={data[0]?.Battery_Mode}
      padding={10}
      size = {230}
    
      aspectRatio={0.56}
      orientation='vertical'
      customization={styles}
    />
  </div>
  )
}

export default BatteryChart