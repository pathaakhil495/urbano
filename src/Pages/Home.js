import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import testimonialData from '../testimonials'; // Assuming you have a data file for testimonials
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import '../Home.css';

const Home = () => (
  <div>
    <Header />
    <Container className="mt-4 p-5 bg-light rounded">
      <Row className="align-items-center mb-5">
        <Col>
          <h1>Welcome to Urbano Services</h1>
          <p>Providing chief maid and baby care services in Kokapet, Gandipet, and Madhapur.</p>
          <Button variant="primary" href="/services">View Services</Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>About Us</h2>
          <p>Urbano Services is committed to providing top-notch maid and baby care services in metropolitan cities. Our team of professional maids and babysitters are trained to cater to all your needs, ensuring your home and children are in safe hands.</p>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Our Services</h2>
          <Row>
            <Col md={4}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Chief Maid Plans</Card.Title>
                  <Card.Text>Choose from daily, weekly, monthly, or yearly plans for professional maid services.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="service-card">
                <Card.Body>
                  <Card.Title>Baby Care Services</Card.Title>
                  <Card.Text>Professional babysitters available for part-time and full-time engagements.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
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

      <Row className="mb-5">
        <Col>
          <h2>Successful Customers</h2>
          <div className="testimonials">
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true }}
              navigation={true}
              className="course-swiper"
            >
              {/* {testimonialData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="single-testimonial">
                    <div className="message">"{testimonial.message}"</div>
                    <div className="profile">
                      <div className="profile-text">
                        <p className="profile-name">- {testimonial.name}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))} */}
            </Swiper>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col className="text-center">
          <h2>Get in Touch</h2>
          <p>Have any questions? Feel free to reach out to us for more information or to book a service.</p>
          <Button variant="primary" href="/inquiry">Inquire Now</Button>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);

export default Home;
