import React, { useState, useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";

const RandomWorkout = () => {
  const [workout, setWorkout] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/random_workout");
        const data = await res.json();
        setWorkout(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWorkout();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2 className="text-center">Random Workout</h2>
        </Col>
      </Row>
      {loading ? (
        <Row className="d-flex justify-content-center mt-5">
          <Spinner animation="border" />
        </Row>
      ) : error ? (
        <Row className="mt-5">
          <Col>
            <Alert variant="danger">
              An error occurred: {error.message}
            </Alert>
          </Col>
        </Row>
      ) : (
        <Row className="mt-5">
          <Col>
            <p>
              <b>Name:</b> {workout.name}
            </p>
            <p>
              <b>Workout Position:</b> {workout.workout_position}
            </p>
            <p>
              <b>Exercise 1:</b> {workout.exercise_1}
            </p>
            <p>
              <b>Exercise 1 reps:</b> {workout.exercise_1_reps}
            </p>
            <p>
              <b>Exercise 2:</b> {workout.exercise_2}
            </p>
            <p>
              <b>Exercise 2 reps:</b> {workout.exercise_2_reps}
            </p>
            <p>
              <b>Exercise 3:</b> {workout.exercise_3}
            </p>
            <p>
              <b>Exercise 3 reps:</b> {workout.exercise_3_reps}
            </p>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default RandomWorkout;
