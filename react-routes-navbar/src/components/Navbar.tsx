import {Button, Container, Nav, Navbar as NavbarBs} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export function Navbar()
{
    return (
        <NavbarBs className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>
                        Store
                    </Nav.Link>
                </Nav>
            <img style={{height:'3rem', width:'3rem', position:'relative'}} src='./icons8-shopping-cart-with-money-100.png'></img>
            </Container>
        </NavbarBs>
    )
}