import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './Navbar.css';
import Auth, { setSession } from '../Auth/Auth';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="NavStyles" color="faded" light>
        <NavbarBrand className="mr-auto fontSizeAdjust">Score Stacc</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
              <NavItem>
                  <NavLink href='#' className="fontColor">Playlist</NavLink>
              </NavItem>
            <NavItem>
              <button className="fontColor">Logout</button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;