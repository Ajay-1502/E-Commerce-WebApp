import { useContext } from 'react';
import musicAlbums, { merchandise } from './data/products';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CartContext from './cart/cart-context';

const DisplayProducts = () => {
  const cartCtx = useContext(CartContext);

  const renderSection = (title, products) => {
    return (
      <>
        <h2
          className="text-center my-4 mb-5 fw-bold"
          style={{ fontFamily: "'Metal Mania', cursive" }}
        >
          {title}
        </h2>
        <Row className="justify-content-center">
          {products.map((product, index) => {
            return (
              <Col
                key={product.id}
                xs={12}
                sm={6}
                md={4}
                lg={3}
                className="mb-4"
              >
                <Card className="h-100 shadow-sm text-center">
                  <Card.Img variant="top" src={product.imageUrl} />
                  <Card.Body className="fw-bold">
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>₹{product.price}</Card.Text>
                    <Button
                      variant="info"
                      onClick={() => cartCtx.addItem(product)}
                    >
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </>
    );
  };

  return (
    <Container className="my-5">
      {renderSection('MUSIC', musicAlbums)}
      {renderSection('MERCH', merchandise)}
      <div className="text-center my-5">
        <Button variant="secondary" size="lg">
          See the cart
        </Button>
      </div>
    </Container>
  );
};

export default DisplayProducts;
