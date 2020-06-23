import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'

function TopBar() {
    var options = ["Experience", "Projects", "Achievements", "Gallery", "Contact me"]

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="sm" className="shadow">
                <Navbar.Brand href=".">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {options.map((value, key)=>{
                            return <Nav.Link href="." key={key}>{value}</Nav.Link>;
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopBar
