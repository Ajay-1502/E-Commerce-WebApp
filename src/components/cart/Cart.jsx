//import cartElements from '../data/cartElements';
import { useContext } from 'react';
import CartContext from './cart-context';
import { Button, Container, Table, Row, Col } from 'react-bootstrap';
import AuthContext from '../store/auth-context';

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext);

  const cartTotal = cartCtx.cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const purchaseHandler = () => {
    alert('Your Order Is Placed Successfully 🎉');
    cartCtx.cartItems.map((item) => {
      cartCtx.removeItem(item);
    });
  };

  return (
    <Container>
      <h2
        className="text-center mb-4 fw-bold"
        style={{ fontFamily: 'Metal Menia,cursive' }}
      >
        Your Cart
      </h2>
      {cartCtx.cartItems.length === 0 ? (
        <p className="text-center fs-5  fw-bold text-danger">
          Your cart is empty.
        </p>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr className="text-center fw-bold">
                <th>ITEM</th>
                <th>QUANTITY</th>
                <th>PRICE</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cartCtx.cartItems.map((item, index) => {
                return (
                  <tr key={index} className="align-middle text-center">
                    <td className="d-flex align-items-center gap-3">
                      <img src={item.imageUrl} width={60} height={60} />
                      {item.title}
                    </td>
                    <td>
                      <Button
                        onClick={() => cartCtx.addItem(item, -1)}
                        variant="danger"
                        disabled={item.quantity < 2}
                        className="py-0 px-2 mx-1"
                      >
                        -
                      </Button>
                      {item.quantity}
                      <Button
                        onClick={() => cartCtx.addItem(item, 1)}
                        className="py-0 px-1 mx-1"
                      >
                        +
                      </Button>
                    </td>
                    <td>₹{item.price}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => cartCtx.removeItem(item)}
                      >
                        REMOVE
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <Row className="justify-content-center mt-4">
            <Col xs="auto" className="fw-bold fs-5">
              Total Amount : ₹{cartTotal}
            </Col>
          </Row>

          <Row className="justify-content-center mt-3">
            <Col xs="auto">
              <Button variant="success" size="md" onClick={purchaseHandler}>
                PURCHASE
              </Button>
            </Col>
          </Row>
        </>
      )}
      <div className="text-end mt-4">
        <Button variant="danger" onClick={onClose}>
          CLOSE
        </Button>
      </div>
    </Container>
  );
};

export default Cart;
