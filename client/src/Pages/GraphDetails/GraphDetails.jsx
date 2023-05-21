import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import callApi from '../../helper/callApi';
import { Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

function GraphDetails() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchGraphData();
  }, []);

  const { id } = useParams();
  const fetchGraphData = async () => {
    const response = await callApi('data/graph_details', { zonename: id });
    console.log(response);
    if (response.devices && response.branches && response.form) {
      const combinedData = combineData(response.devices, response.branches, response.form);
      setData(combinedData);
    }
  };

  const combineData = (devices, branches, form) => {
    const combined = [];
    const deviceLength = devices.length;
    const branchLength = branches.length;
    const formLength = form.length;
    const maxLength = Math.max(deviceLength, branchLength, formLength);
    for (let i = 0; i < maxLength; i++) {
      const device = devices[i] || {};
      const branch = branches[i] || {};
      const forms = form[i] || {};
      combined.push({
        Branch_Name: branch.Branch_Name,
        code: branch.Code,
        region: branch.Region,
        hub: branch.Hub,
        connectivity: forms.Net_Con,
        Battery: forms.Bat_Voltage,
        lastupdate: device.Last_Updated
      });
    }
    return combined;
  };

  return (
    <div>
      <h2>Graph Details</h2>
      <p>Graph ID: {id}</p>
      {data.length > 0 && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Branch Name</TableCell>
              <TableCell>Code</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Hub</TableCell>
              <TableCell>Connectivity</TableCell>
              <TableCell>Battery Voltage</TableCell>
              <TableCell>Last Updated</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.Branch_Name}</TableCell>
                <TableCell>{item.code}</TableCell>
                <TableCell>{item.region}</TableCell>
                <TableCell>{item.hub}</TableCell>
                <TableCell>{item.connectivity}</TableCell>
                <TableCell>{item.Battery}</TableCell>
                <TableCell>{item.lastupdate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}

export default GraphDetails;
