import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import logo from '../logo.svg';

const Header = () => (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top" className="flex-md-nowrap p-0">
        <Navbar.Brand href="#home" sm={3} md={2} className="mr-0">
        <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        Unit Conversion
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav as="ul" className="px-3">
                <Nav.Item as="li"  className="text-nowrap">
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);

export default Header;
