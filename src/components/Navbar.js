import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Bands App</NavbarBrand>
        <NavbarBrand href="https://mirazeca.com">Bands App</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Navigation;
