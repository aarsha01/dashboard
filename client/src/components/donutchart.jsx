import React, { useEffect, useState } from 'react'
import callApi from '../helper/callApi'
import {ResponsivePie} from '@nivo/pie'
import { Paper } from '@mui/material'

function Pie() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchDataPie()
  }, [])

  const fetchDataPie = async ()=>{
    const data = await callApi('data/fetch_DataPie')
    console.log(data);
    if(data.length > 0){
      const formattedData = Object.keys(data[0])?.map(key=>{
        return {
          id:key,
          label:key,
          value:data[0][key]
        }
      })
      setData(formattedData)
    }
  }
  
  return (
    <Paper sx={{width:'100%',height:'50vh',padding:'20px'}} variant="outlined">
      <ResponsivePie
        data={data}
        keys={['value']}
        indexBy="label"
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="white"
        arcLinkLabelsThickness={2}
        arcLabelsSkipAngle={10}
        animate={false}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
          },
        ]}
        motionStiffness={0}
        motionDamping={0}
        colors={({ id, data }) =>
          data.label === 'ONLINE' ? '#3db65b' : '#f24444'
        }
        theme = {{
          legends: {
            text: {
              fill: 'white', // Set the legend text color to white
            },
          },
        }}
      />
    </Paper>
  )
}

export default Pie
