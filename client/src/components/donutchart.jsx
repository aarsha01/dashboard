import React, { useEffect, useState } from 'react'
import callApi from '../helper/callApi'
import {ResponsivePie} from '@nivo/pie'

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
          label:key,
          value:data[0][key]
        }
      })
      setData(formattedData)
    }
  }
  
  return (
    <div className='chart-top' >
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
  arcLinkLabelsTextColor="#333333"
  arcLinkLabelsThickness={2}
  arcLabelsSkipAngle={10}
  arcLabelsTextColor={{
    from: 'color',
    modifiers: [['darker', 2]],
  }}
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
      effects: [
        {
          on: 'hover',
          style: {
            itemTextColor: '#000',
          },
        },
      ],
    },
  ]}
  role="application"
  ariaLabel="Nivo pie chart demo"
  motionStiffness={0}
  motionDamping={0}
  colors={({ id, data }) =>
    data.label === 'ONLINE' ? '#3db65b' : '#f24444'
  }
/>
    </div>
  )
}

export default Pie