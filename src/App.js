import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  CardFooter
} from 'reactstrap';

//Components
import Movie from "./components/Movie";

function App() {
  
  return (
    <div>
      <header>
        <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Movies App</NavbarBrand>
          <Nav className="justify-items-wnd" navbar>
            <NavItem>
              <NavLink href="https://www.imdb.com/">IMDb</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <Movie />
        </div>
      </div>
      <CardFooter>
        Movies App
      </CardFooter>
    </div>
  );
}

export default App;
