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

const Header = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand style={{ color: "white" }} href="/">
          Daniel Shimield
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={{ color: "white" }} href="/components/">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                style={{ color: "white" }}
                href="https://github.com/reactstrap/reactstrap"
              >
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "white" }} href="/components/">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
