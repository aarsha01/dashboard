import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

function ListGen({listItems, headers}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {headers.map(header=>(
            <TableCell>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {listItems.map(item=>(
          <TableRow>
            {Object.keys(item).map(key=>(
              <TableCell>{item[key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ListGen