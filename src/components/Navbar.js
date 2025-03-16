import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const Navigation = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Bands App</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about">About</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
};

export default Navigation;
