import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand tag={Link} to="/" style={{ color: "white" }}>
          Daniel Shimield
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} style={{ color: "white" }} to="/projects">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about" style={{ color: "white" }}>
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href={`mailto:dxshim90@gmail.com`}
                style={{ color: "white" }}
              >
                Contact Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
