import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, Button, Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
    const [navState, setNav] = React.useState(false);

    const scrollToForm = async () => {
        document.querySelector('#form-partner')!.scrollIntoView({behavior: 'smooth'});        
        setTimeout(() => {setNav(false)}, 1000);
    }
    
    return (
        <Container>

            <Navbar expand='md' className='my-3'>
                <NavbarBrand>
                    <span id='brand'>
                        Fillers
                        <span id='plus'>+</span>
                    </span>
                </NavbarBrand>
                
                <Button className='btn btn-dark my-2' onClick={() => scrollToForm()}>
                    <span>Contact Us</span>
                </Button>
                
                {/* <NavbarBrand href='/'>
                    <span id='brand'>
                        Fillers
                        <span id='plus'>+</span>
                    </span>
                </NavbarBrand>

                <NavbarToggler onClick={() => setNav(!navState)} />

                <Collapse isOpen={navState} navbar>
                    
                    <Nav className='ms-auto' navbar>
                        <NavItem>
                            <NavLink className="nav-link mx-2 my-2" to='/partnership' onClick={() => setNav(false)}>
                                PARTNERSHIP
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link mx-2 my-2" to='/products' onClick={() => setNav(false)}>
                                PRODUCTS
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link ms-2 me-4 my-2" to='/aboutus' onClick={() => setNav(false)}>
                                ABOUT
                            </NavLink>
                        </NavItem>
                    </Nav>    

                    <Button className='btn btn-dark my-2' onClick={() => scrollToForm()}>
                        <span>Contact Us</span>
                    </Button>

                </Collapse> */}

            </Navbar>

        </Container>
        
    );
}

export default Header;