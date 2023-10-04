import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ListGen({ listItems, headers, buttons = [] }) {
  // Define the columns to display, placing "Actions" at the end


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headers.map((header, i) => (
              <StyledTableCell key={i}>{header}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems.map((item, i) => (
            <StyledTableRow key={i}>
              {headers.map((header, j) => {
                if (header === 'Actions') {
                  return (
                    <StyledTableCell key={j}>
                      {buttons.map((button, k) => (
                        <div key={k} style={{ display: 'flex', justifyContent: 'space-around' }}> 
                          <Button
                            variant="contained"
                            onClick={() => button.onSubmit(item)}
                          >
                            {button.label}
                          </Button>
                          {k === 0 && ( // Add "Details" button after the first button
                            <Button
                              variant="contained"
                              onClick={() => (item)}
                            >
                              Details
                            </Button>
                          )}
                        </div>
                      ))}
                    </StyledTableCell>
                  );
                } else {
                  return (
                    <StyledTableCell key={j}>{item[header]}</StyledTableCell>
                  );
                }
              })}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ListGen;
