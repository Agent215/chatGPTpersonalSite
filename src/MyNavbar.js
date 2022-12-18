import { React, useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import About from './Sections/About';
import Blog from './Components/Blog';
import ContactForm from './Components/ContactForm';
import Home from './Sections/Home';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function MyNavbar() {
    return (
        <div>
            <Navbar  bg="dark" expand='md' variant="dark" >
                <Container fluid>
                    <Navbar.Brand href="/">🏠</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                                Hello, Thanks for visiting🙏 
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav  className="justify-content-front flex-grow-1 pe-3">
                                <Nav.Link href="/">Home🚪</Nav.Link>
                                <Nav.Link href="/about">About❔</Nav.Link>
                                <Nav.Link href="/blog">Blog📓</Nav.Link>
                                <Nav.Link href="/contact-form">Contact✉️</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact-form' element={<ContactForm />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} /> <Route path='about' element={<About />} />
            </Routes>
        </div>

    );
}