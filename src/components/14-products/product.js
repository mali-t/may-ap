import React from "react";
import { Button, Card } from "react-bootstrap";

const Product = (propse) => {
  const { image, desc, title, price } = propse;

  const addToCart = () => {
    alert(`${title} sepete eklendi`);
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={require(`./images/${image}`)} />
      <Card.Body className="text-center">
        <Card.Title className="fs-3">{title}</Card.Title>
        <Card.Subtitle>{desc}</Card.Subtitle>
        <Card.Text className="fs-4 text-info">
          <strong>${price}</strong>
        </Card.Text>
        <Button variant="warning" onClick={addToCart}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
