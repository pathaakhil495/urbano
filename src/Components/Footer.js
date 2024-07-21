import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-white mt-5 p-4 text-center">
    <Container>
      <Row>
        <Col>
          <p>&copy; 2024 Urbano Services. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
