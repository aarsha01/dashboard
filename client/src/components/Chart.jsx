import React, { useEffect, useState } from 'react'
import {ResponsiveBar} from '@nivo/bar'
import { Paper } from '@mui/material'
import { useNavigate, useOutletContext } from 'react-router-dom'

function Chart({data}) {

  const [chartData, setChartData] = useState([])
  const navigate = useNavigate()
  const filterQuery = useOutletContext()

  useEffect(() => {
    console.log(filterQuery);
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

  const handleBarClick = (data) => {
    const api_url = filterQuery?.value ? `/event/${data?.indexValue.replace(' ','_')}/1/${filterQuery?.key}/${filterQuery?.value}` : `/event/${data?.indexValue.replace(' ','_')}/1`
    navigate(api_url);
  }

  return (
    <Paper sx={{width:'100%',height:'50vh',padding:'20px'}} variant="outlined">
      <ResponsiveBar
        data={chartData}
        keys={['value']}
        indexBy="label"
        margin={{ top: 40, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        groupMode='grouped'
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={'#039BE5'}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'ZONES',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
        enableGridY={false}
        borderRadius={5}
        role="application"
        ariaLabel="Nivo bar chart demo"
        // barAriaLabel={e=>e.label+" faults in : "+e.value}
        theme = {{
          axis: {
            ticks: {
              text: {
                fill: 'white', // Set the tick value color to white
              },
            },
          },
        }}
        onClick={handleBarClick}
    />
    </Paper>
  )
}

export default Chart;
