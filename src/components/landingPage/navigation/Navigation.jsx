import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from './official_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <Navbar id="navbar" expand="lg">
            <Navbar.Brand href="/home">
                <Image
                    src={logo}
                    width="150px"
                    alt="Essteem logo"
                ></Image>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                <Nav.Link href="profile" className="text-dark">Profile</Nav.Link>
                <Nav.Link href="contact" className="text-dark">Contact Us</Nav.Link>
                <Nav.Link href="FAQ" className="text-dark">FAQ</Nav.Link>
                <Nav.Link href="/" className="text-dark">Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
