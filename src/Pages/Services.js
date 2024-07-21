import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ServiceCard from '../Components/ServiceCard';
import { Container, Row, Col, Form } from 'react-bootstrap';

const services = [
  { title: 'Chief Maid Daily Plan', description: 'Daily maid services for your home.', price: '$50/day', location: 'Kokapet' },
  { title: 'Baby Sitter Weekly Plan', description: 'Weekly babysitter services for your child.', price: '$300/week', location: 'Gandipet' },
  // Add more services here
];

const Services = () => {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const filteredServices = services.filter(service => 
    !selectedLocation || service.location === selectedLocation
  );

  return (
    <div>
      <Header />
      <Container>
        <h1 className="mt-4">Our Services</h1>
        <Form>
          <Form.Group controlId="formLocation">
            <Form.Label>Filter by Location</Form.Label>
            <Form.Control as="select" value={selectedLocation} onChange={handleLocationChange}>
              <option value="">All Locations</option>
              <option value="Kokapet">Kokapet</option>
              <option value="Gandipet">Gandipet</option>
              <option value="Madhapur">Madhapur</option>
              {/* Add more locations as needed */}
            </Form.Control>
          </Form.Group>
        </Form>
        <Row>
          {filteredServices.map((service, index) => (
            <Col key={index} sm={12} md={6} lg={4}>
              <ServiceCard {...service} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Services;
