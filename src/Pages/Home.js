import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Typist from 'react-typist'; // Import Typist for typing animation
import testimonialData from '../testimonials'; // Assuming you have a data file for testimonials
import homeImage from '../Assets/india.jpg';
// import '../home.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => (
  <div>
    <Header />
    <Container className="mt-4 p-5 bg-light rounded">
      <Row className="align-items-center mb-5 text-center">
        <Col>
          <Typist avgTypingDelay={80}>
            <h1 className="mb-3">Welcome to Urbano Services</h1>
            <p className="lead mb-4">Providing chief maid and baby care services in Kokapet, Gandipet, and Madhapur.</p>
          </Typist>
          <Button variant="primary" href="/services">View Services</Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">About Us</h2>
          <p className="text-center">
            Urbano Services is committed to providing top-notch maid and baby care services in metropolitan cities. Our team of professional maids and babysitters are trained to cater to all your needs, ensuring your home and children are in safe hands.
          </p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Our Services</h2>
          <Row className="justify-content-center">
            <Col md={4} className="mb-4">
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Chief Maid Plans</Card.Title>
                  <Card.Text>Choose from daily, weekly, monthly, or yearly plans for professional maid services.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Baby Care Services</Card.Title>
                  <Card.Text>Professional babysitters available for part-time and full-time engagements.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Special Offers</Card.Title>
                  <Card.Text>Check out our special offers for new customers and bulk bookings.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="text-center mb-5">
        <Col>
          <Button className="book-button" variant="success" size="lg" href="/services">
            Book Services
          </Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">How Does It Work?</h2>
          <Row className="text-center">
            <Col md={6} className="mb-4">
              <Card className="step-card">
                <Card.Body className="step" data-step="1">
                  <h5>Fill the Enquire Form</h5>
                  <p>Tell us what you require. See the list of all the available maids in your area.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="step-card">
                <Card.Body className="step" data-step="2">
                  <h5>Meet, Select & Relax</h5>
                  <p>Meet the maids, select the one that fits your needs, and relax while we take care of the rest.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="text-center mb-4">Successful Customers</h2>
          <Row className="justify-content-center">
            {testimonialData.map((testimonial, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="testimonial-card">
                  <Card.Body>
                    <Card.Text>"{testimonial.message}"</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">- {testimonial.name}</Card.Subtitle>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <Container className="mt-4 p-5 bg-light rounded">
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4">Where We Are ??</h2>
            <Row className="justify-content-center">
              <Col md={12} className="mb-4">
                <Card className="city-card">
                  <Card.Img variant="top" src={homeImage} alt="City 1" />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Row className="mb-5">
        <Col className="text-center">
          <h2 className="mb-3">Get in Touch</h2>
          <p className="lead mb-4">Have any questions? Feel free to reach out to us for more information or to book a service.</p>
          <Button variant="primary" href="/inquiry">Inquire Now</Button>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Home;
