import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { logoutUser } from '../../Redux/actions/userAcions';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const ws = useSelector((state) => state.ws);
  const toggle = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand style={{ color: ws ? 'green' : 'red' }}>
          Адвокат!
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/faces">faces</NavLink>
            </NavItem>
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
    </div>
  );
}

export default NavBar;

// import React, { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import RestaurantIcon from '@mui/icons-material/Restaurant';
// import Button from '@mui/material/Button';
// import { Link } from 'react-router-dom';
// import { Collapse, DropdownToggle, Nav,
//   Navbar, NavbarBrand, NavbarText, NavbarToggler,
//   NavItem, NavLink, UncontrolledDropdown } from 'reactstrap';

// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar>
//         <NavbarBrand href="/">reactstrap</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default NavBar;

// /* <Box sx={{ flexGrow: 1 }}>
// <AppBar position="static">
//   <Toolbar>
//     <RestaurantIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//     <Typography
//       variant="h6"
//       noWrap
//       sx={{
//         mr: 2,
//         display: { xs: 'none', md: 'flex' },
//         fontWeight: 700,
//         color: 'inherit',
//         textDecoration: 'none',
//       }}
//     >
//       <Button sx={{ color: '#fff' }}><Link to="/">адвокат тела</Link></Button>
//       <Box className="navbarButton">
//         <Button sx={{ color: '#fff' }}><Link to="/signup">зарегистрироваться</Link></Button>
//         <Button sx={{ color: '#fff' }}><Link to="/login">войти</Link></Button>
//       </Box>
//     </Typography>
//   </Toolbar>
// </AppBar>
// </Box> */
