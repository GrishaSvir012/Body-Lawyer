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
import './navbar.css';

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
              display: { xs: 'flex', md: 'flex' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <div className="cool">
              <Button
                className="logo"
                style={{ color: ws ? 'green' : 'red' }}
              >
                <Link to="/"><h2>адвокат тела</h2></Link>
              </Button>
            </div>
            <div className="wantEat">
              <Button className="registration">
                <Link className="recipe" to="/recipes">хочу есть</Link>
              </Button>
            </div>

            { user.id
              ? (
                <div className="registrationBlock">
                  <Button className="LK">
                    <Link to="personalaccount">Личный кабинет</Link>
                  </Button>
                  <Button className="registration" onClick={logoutHandler}>
                    <Link to="/">выход</Link>
                  </Button>
                </div>
              )
              : (
                <div className="registrationBlock">
                  <Button className="registration">
                    <Link to="/signup">зарегистрироваться</Link>
                  </Button>
                  <Button className="registration">
                    <Link to="/signin">войти</Link>
                  </Button>
                </div>
              ) }

          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
