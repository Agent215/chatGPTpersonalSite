import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from './About';
import ContactForm from './ContactForm';
import Home from './Home';

export default function MyNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ padding: "0", margin: '0' }}>
                <Navbar.Brand href="/">Brahm Schultz</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="/contact-form">Contact</Nav.Link>
                        {/* <NavDropdown title="Contact" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#contact-form">Contact Form</NavDropdown.Item>
                            <NavDropdown.Item href="#email">Email</NavDropdown.Item>
                            <NavDropdown.Item href="#phone">Phone</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact-form' element={<ContactForm />} />
                <Route path='about' element={<About />} />
            </Routes>
        </div>

    );
}