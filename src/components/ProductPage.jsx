import { useParams } from 'react-router-dom';
import musicAlbums, { merchandise } from './data/products';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useContext } from 'react';
import CartContext from './cart/cart-context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductPage = () => {
  const { productId } = useParams();
  const cartCtx = useContext(CartContext);

  const allProducts = [...musicAlbums, ...merchandise];
  const product = allProducts.find((p) => p.id == productId);

  const addToCartHandler = (product) => {
    cartCtx.addItem(product, 1);
    toast.success(`${product.title} is added to cart 🎉`);
  };

  if (!product) {
    return <p className="text-center mt-5">Product Not Found.</p>;
  }

  const generalDescription = `Dive into the world of shopping with our exclusive collection of merchandises & albums. 
  Our merchandises include tshirt and coffee cup, you will get them signed by our rockband musicians.
  Each album is a journey through sound, carefully crafted to elevate your mood and transport you to another dimension. 
  Perfect for music lovers who appreciate depth, quality, and timeless creativity.`;

  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img
            src={product.imageUrl}
            alt={product.title}
            className="img-fluid rounded-4 shadow"
            style={{ height: '400px', width: '100%', objectFit: 'cover' }}
          />
        </Col>

        <Col md={6}>
          <h2 className="fw-bold">{product.title}</h2>
          <h4 className="text-muted mb-3">₹{product.price}</h4>
          <p
            className="text-secondary"
            style={{ fontSize: '1rem', lineHeight: '1.6' }}
          >
            {generalDescription}
          </p>
          <Button
            variant="primary"
            className="mt-3 px-4 py-2"
            onClick={() => addToCartHandler(product)}
          >
            Add To Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
