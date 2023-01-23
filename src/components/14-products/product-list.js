import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "./product";
import products from "./production.json";

const ProductList = () => {
  return (
    <Container fluid>
      <Row className="g-5">
        {products.map((product) => (
          <Col key={product.id} md={6} lg={4} xl={3}>
            <Product {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
