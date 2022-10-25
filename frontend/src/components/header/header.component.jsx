import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsFillHandbagFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { LinkContainer } from "react-router-bootstrap";



const Header = () => {

    const cartItems = useSelector(state => state.cartStore);
    let totalItems = cartItems.reduce((previous, next) => previous + next.qty, 0);

    return (
        <header>
            <Navbar bg="primary" className="navbar-dark" expand="lg">
                <Container>
                    <LinkContainer to={"/"}>
                        <Navbar.Brand >FalconStore</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                        <Nav className="mr-auto">
                            <LinkContainer to={"/sign-in"}>
                                <Nav.Link className='inline-icon'><FaUser />Sign In</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/cart"}>
                                <Nav.Link className="inline-icon"><BsFillHandbagFill /><sup>{(totalItems>0)?totalItems:null}</sup></Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </header>


    );
}

export default Header;