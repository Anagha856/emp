import { Table, TableContainer,TableRow,TableCell,TableHead,TableBody, Button} from '@mui/material'
import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
  var [employee,setEmployee]=useState([])
  useEffect(()=>{

  axios.get("http://localhost:3004/view")
  .then((res)=>{
    console.log(res);
    setEmployee(res.data);
  })
  .catch((err)=>console.log(err));
})


  const delValue=(id)=>{
    axios.delete("http://localhost:3004/remove/" + id)
    .then((res)=>{
      alert(res.data.message);
    })
  }

  return (
    <div>
        <h1>VIEW</h1>
        <TableContainer>
      <Table  >

        <TableHead>
          <TableRow>
            <TableCell >Name&nbsp;</TableCell>
            <TableCell >Age&nbsp;</TableCell>
            <TableCell >Department&nbsp;</TableCell>
            <TableCell >Salary&nbsp;</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {employee.map((val)=>{
            return(

            
        
        <TableRow>    
            <TableCell >{val.Name}</TableCell>
            <TableCell >{val.Age}</TableCell>
            <TableCell >{val.Dept}</TableCell>
            <TableCell >{val.Sal}</TableCell>
            <TableCell>
            <Button size="small"variant='contained'>Update</Button>
            <Button size="small"variant='contained'onClick={()=>{
              delValue(val._id)
            }}>Delete</Button>
            </TableCell>
        </TableRow>
        )
          })}
        </TableBody>

    </Table>
</TableContainer>
    </div>
  )
}

export default View