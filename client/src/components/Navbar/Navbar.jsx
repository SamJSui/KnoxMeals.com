import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.style.css'

function CreateNavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary">
        <Container>
            <Navbar.Brand href="#home" className='navbar-text'>KnoxMeals</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='navbar-btn'>
                <Nav className="ms-auto text-light">
                    <Nav.Link href="#home" className='navbar-text'>Home</Nav.Link>
                    {/* <Nav.Link href="#about" className='navbar-text'>About</Nav.Link>
                    <Nav.Link href="#docs" className='navbar-text'>Docs</Nav.Link> */}
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default CreateNavBar;