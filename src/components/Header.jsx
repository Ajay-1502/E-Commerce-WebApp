import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartContext from './cart/cart-context';
import AuthContext from './store/auth-context';
import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';

const Header = ({ cartHandler }) => {
  const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const totalItems = cartCtx.cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const logoutHandler = () => {
    authCtx.logout();
    navigate('/auth');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold">
          The Generics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link as={Link} to="/" className="mx-2 fw-bold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/store" className="mx-2 fw-bold">
              Store
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="mx-2 fw-bold">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus" className="mx-2 fw-bold">
              Contact Us
            </Nav.Link>
          </Nav>
          {authCtx.isLoggedIn && (
            <Button
              variant="outline-info"
              className="position-relative"
              onClick={cartHandler}
            >
              Cart
              <Badge bg="info" text="dark" className="ms-1">
                {totalItems}
              </Badge>
            </Button>
          )}

          {authCtx.isLoggedIn ? (
            <Button
              variant="danger"
              className="position-relative ms-4"
              onClick={logoutHandler}
            >
              Logout
            </Button>
          ) : (
            <Link to="/auth">
              <Button variant="outline-info" className="position-relative ms-4">
                Login
              </Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
