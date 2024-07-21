import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';


const InquiryFormModal = ({ show, handleClose, service }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "00d9dce0-a4a9-4f03-a4a2-a2be06b45418");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log("Form submission successful:", responseData);

      // Handle success, e.g., close modal
      handleClose();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Form has been saved",
        showConfirmButton: false,
        timer: 1500
      });    } catch (error) {
      console.error('Error submitting form:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Enquiry Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" required />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" required />
          </Form.Group>
          <Form.Group controlId="formMobile">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="text" name="mobile" required />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" value={service.location} readOnly />
          </Form.Group>
          <Form.Group controlId="formServiceType">
            <Form.Label>Service Type</Form.Label>
            <Form.Control type="text" name="serviceType" value={service.title} readOnly />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default InquiryFormModal;
