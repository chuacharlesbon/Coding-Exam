import {Navbar, Nav, Container} from 'react-bootstrap'


export default function AppNavbar() {

	return(
	<>
	<Navbar bg="dark" variant="dark">
	  <Container>
	  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
	  <Nav className="me-auto">
	    <Nav.Link href="#home">Home</Nav.Link>
	    <Nav.Link href="#features">Create Post</Nav.Link>
	    <Nav.Link href="#pricing">View Post</Nav.Link>
	    <Nav.Link href="#pricing">Logout</Nav.Link>
	  </Nav>
	  </Container>
	</Navbar>
	</>



		)
}