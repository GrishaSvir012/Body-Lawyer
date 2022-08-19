import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;

/* <Box sx={{ flexGrow: 1 }}>
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
</Box> */
