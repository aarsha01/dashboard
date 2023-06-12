import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'

function ListGen({listItems, headers, buttons=[]}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {buttons.length > 0 && <TableCell>Actions</TableCell>}
          {headers.map((header,i)=>(
            <TableCell key={i}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {listItems.map((item,i)=>(
          <TableRow key={i}>
            { buttons.length > 0 && 
             <TableCell>
              {buttons.map((button,i)=>(
                <Button variant='contained' key={i} onClick={()=>{button.onSubmit(item.Device_ID)}}>{button.label}</Button>
              ))}
             </TableCell>
            }
            {Object.keys(item).map((key,i)=>(
              <TableCell key={i}>{item[key]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ListGen