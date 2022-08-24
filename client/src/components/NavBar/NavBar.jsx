/* eslint-disable no-lone-blocks */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Button from '@mui/material/Button';
import { logoutUser } from '../../Redux/actions/userActions';

function NavBar() {
  const user = useSelector((state) => state.user);
  const ws = useSelector((state) => state.ws);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };

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
            <Button
              className="logo"
              style={{ color: ws ? 'green' : 'red' }}
            >
              <Link to="/">адвокат тела</Link>

            </Button>
            { user.id
              ? (
                <>
                  <p className="helloUser">
                    Hello,
                    {' '}
                    {user.name}
                  </p>
                  <Button className="registration" onClick={logoutHandler}>
                    <Link to="/">выход</Link>
                  </Button>
                  <Button className="LK">
                    <Link to="personalaccount">Личный кабинет</Link>
                  </Button>
                </>
              )
              : (
                <>
                  <Button className="registration">
                    <Link to="/signup">зарегистрироваться</Link>
                  </Button>
                  <Button className="registration">
                    <Link to="/signin">войти</Link>
                  </Button>
                </>
              ) }

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

// это гришин navbar
/* <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand style={{ color: ws ? 'green' : 'red' }}>
          Адвокат!
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">chat</NavLink>
            </NavItem>
            {user.id
              ? (
                <>
                  <NavItem>
                    <span className="nav-link">
                      Hello,
                      {' '}
                      {user.name}
                    </span>
                  </NavItem>
                  <NavItem>
                    <Button onClick={logoutHandler} color="primary" outline className="nav-link">
                      logout
                    </Button>
                  </NavItem>
                </>
              )
              : (
                <>
                  <NavItem>
                    <NavLink className="nav-link" to="/signup">signup</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/signin">signin</NavLink>
                  </NavItem>
                </>
              )}

          </Nav>
        </Collapse>
      </Navbar>
    </div> */
