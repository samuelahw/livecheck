import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
    return (
        <Navbar expand="lg" className="bg-primary bg-gradient" >
            <Container>
                <Navbar.Brand >
                    <img height="40" className="w-40 object-fit-sm-contain" src='/images/livechecklogo1.png' alt="Live Check"></img>
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;