import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, Button, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    const [navState, setNav] = React.useState(false);


    
    return (
        <Container>

            <Navbar id='navbar' expand='md' className='my-3'>

                <NavbarBrand href='/'>
                    <img src="/logo.png" alt="logo"/>
                </NavbarBrand>

                <NavbarToggler onClick={() => setNav(!navState)} />

                <Collapse isOpen={navState} navbar>
                    
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className="nav-link mx-2">
                                Partnership
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link mx-2">
                                Products
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link ms-2 me-4">
                                About Us
                            </NavLink>
                        </NavItem>
                    </Nav>    

                    <Button className='btn btn-dark'>
                        <small>Get Started</small>
                    </Button>

                </Collapse>

            </Navbar>

        </Container>
        
    );
}

export default Header;