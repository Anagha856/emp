import { AppBar,Button,Toolbar,Typography } from '@mui/material'
import React from 'react'
import {Link}from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography variant='h6'component='div'color="black">day 4</Typography>&nbsp;&nbsp;
                <Link to='/A'>
                    <Button variant='contained'>Add</Button>
                </Link>
                &nbsp;
                <Link to='/V'>
                    <Button variant='contained'>View</Button>
                </Link>
                &nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar