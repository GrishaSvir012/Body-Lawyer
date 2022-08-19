import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <RestaurantIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Button sx={{ color: '#fff' }}><Link to="/">адвокат тела</Link></Button>
            <Box className="navbarButton">
              <Button sx={{ color: '#fff' }}><Link to="/signup">зарегистрироваться</Link></Button>
              <Button sx={{ color: '#fff' }}><Link to="/login">войти</Link></Button>
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
