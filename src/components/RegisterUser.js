import React, { useState } from "react";
import { Container, Form, FormGroup, Button, Row, Col } from "react-bootstrap";

function RegisterUser() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send a post request to create a new user
      const response = await fetch("/api/new_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);

      // Handle the response from the server
      if (data.message === "User created") {
        setSuccess(true);
        setFormData({ name: "", email: "" });
      } else {
        console.log("Error creating user");
      }
    } catch (error) {
      console.log(error);
      // Handle any errors that occurred during the request
    }
  };

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={12} md={4} lg={4}>
          {success && (
            <div className="alert alert-success">
              Account created successfully
            </div>
          )}
          <h3 className="text-center">Create your new account</h3>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </FormGroup>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterUser;
