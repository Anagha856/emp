import { Button,TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div>
     <h2>Add</h2>
     <TextField
        variant="outlined"
        label="Name"
        name="Name"
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Age"
        name="Age"      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Department"
        name="Dept"
      />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="Salary"
        name="Sal"
        />
        <br /><br />
<Button variant="contained" color="secondary">
        Submit
      </Button>
          
    </div>
  )
}

export default Add