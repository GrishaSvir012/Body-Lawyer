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
      <Navbar color="light" light expand="md">
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
