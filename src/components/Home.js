import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/mmafight.png";

function Home() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col xs={12} md={6}>
          <img
            src={logo}
            alt="MMA fighters"
            style={{
              borderRadius: "5%",
              verticalAlign: "top",
              width: "100%",
              opacity: 0.8,
              filter: "alpha(opacity=50)",
            }}
          />
        </Col>
        <Col xs={12} md={6}>
          <h1 className="text-center text-md-left display-4 main-h1">
            Transform Your Body and Mind with MMA Training
          </h1>
          <p className="lead text-left text-md-left" style={{paddingBottom: "2%"}}>
            Unlock Your Inner Fighter with the Ultimate MMA Training App.
            Whether you're a beginner looking to start your journey or a
            seasoned pro seeking to take your skills to new heights, our
            expert-designed workouts, instructional videos, and supportive
            community will help you achieve your full potential. Join us today
            and unleash the fighter within!
          </p>
          <div className="text-center text-md-left">
            <Button variant="primary" className="mx-2 mb-3 mb-md-0 stretch-btn" size="lg">
              Sign up for a new account
            </Button>
            <Button variant="success" className="mx-2 mb-3 mb-md-0 stretch-btn" size="lg">
              Login to your account
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
