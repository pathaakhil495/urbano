import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServiceCard = ({ title, description, price }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text>Price: {price}</Card.Text>
      <Button variant="primary">Book Now</Button>
    </Card.Body>
  </Card>
);

export default ServiceCard;
