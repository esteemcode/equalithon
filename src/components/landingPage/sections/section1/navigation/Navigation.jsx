import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from './essteem-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand href="/">
                <Image
                    src={logo}
                    width="50px"
                    height="50px"
                    alt="Essteem logo"
                ></Image>
            </Navbar.Brand>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                <Nav.Link href="/" className="text-light">Home</Nav.Link>
                <Nav.Link href="#link" className="text-light">More Info</Nav.Link>
                <Nav.Link href="#link" className="text-light">Equalithons</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>        
    )
}

export default Navigation;