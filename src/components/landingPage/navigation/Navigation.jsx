import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logo from './official_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
    return (
        <Navbar id="navbar" expand="lg">
            <Navbar.Brand href="/">
                <Image
                    src={logo}
                    width="150px"
                    alt="Essteem logo"
                ></Image>
            </Navbar.Brand>            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Nav>
                <Nav.Link href="#link" className="text-light">Link 1</Nav.Link>
                <Nav.Link href="#link" className="text-light">Link 2</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>        
    )
}

export default Navigation;