import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { MdSportsKabaddi } from "react-icons/md";


function NavigationBar() {
  const location = useLocation();
  const [showRegister, setShowRegister] = useState(true);
  const [showHome, setShowHome] = useState(false);
  
  useEffect(() => {
    if (location.pathname === "/register-user") {
      setShowRegister(false);
    }
  }, [location.pathname]);
  
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowHome(true);
    }
  }, [location.pathname]);

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="/"><MdSportsKabaddi size={24}/> MMA Training</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {showHome && (
            <Nav.Link href="/">Home</Nav.Link>
            )}
            <Nav.Link href="/create-workout">Create Workout</Nav.Link>
            <Nav.Link href="/random-workout">Random Workout</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            {showRegister && (
              <Nav.Link href="/register-user">Sign-up</Nav.Link>
            )}
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
