import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsFillHandbagFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";


const Header = () => {
    return (
        <header>
            <Navbar bg="primary" className="navbar-dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">FalconStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                    <Nav className="mr-auto">
                        <Nav.Link href="/cart" className="inline-icon"><BsFillHandbagFill />Cart</Nav.Link>
                        <Nav.Link href="/cart" className='inline-icon'><FaUser />Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
        </header>


    );
}

export default Header;