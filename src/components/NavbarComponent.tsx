import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Badge,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
} from "reactstrap";

export const NavbarComponent = () => {
  return (
    <Container>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Shopping System
        </NavbarBrand>
        <Nav>
          <NavItem>
            <FontAwesomeIcon icon={faShoppingCart} />
            <Badge color="primary">1</Badge>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  );
};
