import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => (
  <footer style={{ marginTop: '50px' }}>
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <p className="text-center">
            &copy; {new Date().getFullYear()} MMA Training by Rocky Rasakith. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
