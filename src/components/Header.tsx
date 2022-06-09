import React from "react";
import './Header.css'
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/"><code style={{fontSize: "2.5vh"}}>Kai</code></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="about" style={{fontSize: "2.0vh"}}>About</Nav.Link>
                <Nav.Link href="projects" style={{fontSize: "2.0vh"}}>Projects</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>            
        </div>
    );
}

export default Header;