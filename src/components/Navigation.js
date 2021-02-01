import React, { Component, Fragment } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
// Import { Link } here //
import {link} from 'react-router-dom';
 
const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    FakeCars.com
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        {/* <Link to='/'>HOME</Link> */}
                    </li>
                    <li className="nav-list-item">
                        {/* <Link to='/about'>ABOUT</Link> */}
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation