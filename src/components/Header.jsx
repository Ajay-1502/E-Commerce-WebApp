import { useContext } from 'react';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import CartContext from './cart/cart-context';

const Header = ({ cartHandler }) => {
  const cartCtx = useContext(CartContext);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand href="#" className="fs-3 fw-bold">
          The Generics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link href="#home" className="mx-2 fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#store" className="mx-2 fw-bold">
              Store
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2 fw-bold">
              About
            </Nav.Link>
          </Nav>
          <Button
            variant="outline-info"
            className="position-relative"
            onClick={cartHandler}
          >
            Cart
            <Badge bg="info" text="dark" className="ms-2">
              {cartCtx.cartItems.length}
            </Badge>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
