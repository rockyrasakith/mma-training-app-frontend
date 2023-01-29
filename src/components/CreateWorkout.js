import { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";

function CreateWorkout() {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    exercise_1_name: "",
    exercise_2_name: "",
    exercise_3_name: "",
    exercise_1_reps: "",
    exercise_2_reps: "",
    exercise_3_reps: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("/create_workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    setFormData({
      name: "",
      position: "",
      exercise_1_name: "",
      exercise_2_name: "",
      exercise_3_name: "",
      exercise_1_reps: "",
      exercise_2_reps: "",
      exercise_3_reps: "",
    });
    return data;
  };
  return (
    <Container style={{padding: "2% 1% 10% 1%"}}>
      <Row>
        <Col md={{ span: 6, offset: 0 }}>
          <Form onSubmit={handleSubmit}>
            <h1>Create Workout</h1>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formPosition">
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formExercise1Name">
              <Form.Label>Exercise 1 Name</Form.Label>
              <Form.Control
                type="text"
                name="exercise_1_name"
                value={formData.exercise_1_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formExercise1Reps">
              <Form.Label>Exercise 1 Repetitions</Form.Label>
              <Form.Control
                type="number"
                name="exercise_1_reps"
                value={formData.exercise_1_reps}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formExercise2Name">
              <Form.Label>Exercise 2 Name</Form.Label>
              <Form.Control
                type="text"
                name="exercise_2_name"
                value={formData.exercise_2_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formExercise2Reps">
              <Form.Label>Exercise 2 Repetitions</Form.Label>
              <Form.Control
                type="number"
                name="exercise_2_reps"
                value={formData.exercise_2_reps}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formExercise3Name">
              <Form.Label>Exercise 3 Name</Form.Label>
              <Form.Control
                type="text"
                name="exercise_3_name"
                value={formData.exercise_3_name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="formExercise3Reps">
              <Form.Label>Exercise 3 Repetitions</Form.Label>
              <Form.Control
                type="number"
                name="exercise_3_reps"
                value={formData.exercise_3_reps}
                onChange={handleChange}
              />
            </Form.Group>
            <p />
            <Button variant="primary" type="submit">
              Create Workout
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateWorkout;
