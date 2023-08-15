import React from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import { Paper } from '@mui/material'

const data = [
  { name: 'Panic Button ', value: 12 },
  { name: 'Keypad', value: 16 },
  { name: 'Battery', value: 2 },
  { name: 'Hooter', value: 13 },
  { name: 'Panel', value: 28 },
  { name: 'Shutter Contact', value: 2 },
];

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1','#616a6b','#d3546f','#b7950b']; // Define colors for each data entry

const Ticket = () => {
  return (
    <Paper sx={{width:'100%',height:'50vh',padding:'20px'}} variant="outlined">
      <ResponsiveContainer>
        <PieChart >
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={110}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend align='left' />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default Ticket;
