import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';


const NavBar = () => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-3">
        <Container>
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Heroes App
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" activeKey={pathname}>
                <NavLink 
                    className="nav-item nav-link" 
                    exact
                    to="/marvel"
                >
                Marvel
                </NavLink>
                <NavLink 
                    className="nav-item nav-link" 
                    exact
                    to="/dc"
                >
                DC
                </NavLink>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default NavBar
