import { useParams } from 'react-router-dom';
import musicAlbums, { merchandise } from './data/products';
import { Card, Container } from 'react-bootstrap';

const ProductPage = () => {
  const { productId } = useParams();

  const allProducts = [...musicAlbums, ...merchandise];

  const product = allProducts.find((p) => p.id == productId);

  if (!product) {
    return <p className="text-center mt-5">Product Not Found.</p>;
  }

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card
        className="h-100 shadow-sm text-center"
        style={{ maxWidth: '400px' }}
      >
        <Card.Img variant="top" src={product.imageUrl} />
        <Card.Body className="fw-bold">
          <Card.Title className="product-title">{product.title}</Card.Title>
          <Card.Text>₹{product.price}</Card.Text>
          <Card.Text>Product ID: {product.id}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductPage;
