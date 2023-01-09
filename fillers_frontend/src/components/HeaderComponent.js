import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, Button, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    const [navState, setNav] = React.useState(false);
    
    return (
        <Container>

            <Navbar expand='md' className='my-3'>

                <NavbarBrand href='/'>
                    <span id='brand'>
                        Fillers
                        <span id='plus'>+</span>
                    </span>
                </NavbarBrand>

                <NavbarToggler onClick={() => setNav(!navState)} />

                <Collapse isOpen={navState} navbar>
                    
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className="nav-link mx-2">
                                PARTNERSHIP
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link mx-2">
                                ABOUT
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link ms-2 me-4">
                                PRODUCTS
                            </NavLink>
                        </NavItem>
                    </Nav>    

                    <Button className='btn btn-dark'>
                        <span>Get Started</span>
                    </Button>

                </Collapse>

            </Navbar>

        </Container>
        
    );
}

export default Header;