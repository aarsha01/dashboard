import React, { useEffect, useState } from 'react'
import {ResponsivePie} from '@nivo/pie'
import { Paper,Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'


function Pie({data}) {

  const [chartData, setChartData] = useState([])
  const nav = useNavigate()

  useEffect(() => {
    if (data) {
      const formattedData = Object.keys(data)?.map((key) => {
        return {
          id:key.replace('_'," "),
          label:key.replace('_',' '),
          value:data[key]
        }
      })
      setChartData(formattedData)
    } 
  }, [data]);

  const handleClick = (data)=>{
    nav(`/event/CMS_status/${data.label.toLowerCase()}`)
  }
  
  return (
    <Paper variant='chartBox'>
      <Typography variant='chartTitle'>
        Alarm Status
      </Typography>
      
      <ResponsivePie
        data={chartData}
        keys={['value']}
        indexBy="label"
        margin={{ top: 10, right: 40, bottom: 80, left: 40 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="black"
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
          data.label === 'ONLINE' ? '#00ff7f' : '#b22222'
        }
        theme = {{
          legends: {
            text: {
              fill: 'black', // Set the legend text color to white
            },
          },
        }}
        onClick={handleClick}
      />
    </Paper>
  )
}

export default Pie
