import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function TopBar() {
    var options = ["Experience", "Projects", "Achievements", "Gallery", "Contact me"]

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="sm" className="shadow">
                <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>{options[0]}</Nav.Link>
                        <Nav.Link>{options[1]}</Nav.Link>
                        <Nav.Link>{options[2]}</Nav.Link>
                        <Nav.Link>{options[3]}</Nav.Link>
                        <Nav.Link as={Link} to="/contact/">{options[4]}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopBar
