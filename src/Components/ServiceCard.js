// src/Components/ServiceCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ServiceCard = ({ title, description, price, location, onBookNow }) => (
  <Card className="service-card">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text><strong>Price:</strong> {price}</Card.Text>
      <Card.Text><strong>Location:</strong> {location}</Card.Text>
      <Button variant="primary" onClick={() => onBookNow({ title, location })}>Book Now</Button>
    </Card.Body>
  </Card>
);

export default ServiceCard;
