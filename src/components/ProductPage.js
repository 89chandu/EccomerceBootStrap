import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const ProductPage = ({ products }) => {
  return (
    <div className="product-grid">
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={3} sm={6}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Img
                variant="top"
                src={product.image || 'image'}
                alt={product.name}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
