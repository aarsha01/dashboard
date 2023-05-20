import React, { useEffect, useState } from 'react';
import callApi from '../helper/callApi';
import { ResponsiveBar } from '@nivo/bar';
import { useNavigate } from 'react-router-dom';

function Chart() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await callApi('data/fetch_data');
    console.log(data);
    if (data.length > 0) {
      const formattedData = Object.keys(data[0])?.map((key) => {
        return {
          label: key.replace('_', ' '),
          value: data[0][key]
        };
      });
      setData(formattedData);
    }
  };

  const handleBarClick = (data) => {
  //  console.log(event)
    
    navigate(`/event/${data?.indexValue.replace(' ','_')}`);
  }
  return (
    <div className='chart-top'>
      <ResponsiveBar
        data={data}
        keys={['value']}
        indexBy='label'
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        groupMode='grouped'
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
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
        onClick={handleBarClick}
        role='application'
        ariaLabel='Nivo bar chart demo'
      />
    </div>
  );
}

export default Chart;
