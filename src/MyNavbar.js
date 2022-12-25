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
import BlogPage from './Components/BlogPage';
import { myBlogs } from './myBlogs';


export default function MyNavbar() {
    return (
        <div>
            <Navbar className='my-navbar'  expand='md'    >
                <Container fluid >
                    <Navbar.Brand  href="/">🏠</Navbar.Brand>
                    <Navbar.Toggle   aria-controls={`offcanvasNavbar-expand-md`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-md`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                        placement="end"
                    >
                        <Offcanvas.Header   className='my-navbar' closeButton>
                            <Offcanvas.Title   id={`offcanvasNavbarLabel-expand-md`}>
                                Hello, Thanks for visiting🙏 
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body  className='my-navbar-offcanvas' >
                            <Nav  className="justify-content-front flex-grow-1 pe-3">
                                <Nav.Link className='my-navbar-offcanvas' href="/">Home🚪</Nav.Link>
                                <Nav.Link  className='my-navbar-offcanvas'href="/about">About❔</Nav.Link>
                                <Nav.Link className='my-navbar-offcanvas' href="/blog">Blog📓</Nav.Link>
                                <Nav.Link  className='my-navbar-offcanvas'  href="/contact-form">Contact✉️</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact-form' element={<ContactForm />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog blogs={myBlogs} />} /> <Route path='about' element={<About />} />
                <Route path='/blog/:id' element={<BlogPage   />} /> <Route path='about' element={<About />} />

            </Routes>
        </div>

    );
}