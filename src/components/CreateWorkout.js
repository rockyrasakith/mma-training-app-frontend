import { useState } from "react";

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
    const response = await fetch('/create_workouts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
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
}


  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Workout</h1>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>
      <br />
      <label>
        Position:
        <input
          type="text"
          name="position"
          onChange={handleChange}
          value={formData.position}
        />
      </label>
      <br />
      <label>
        Exercise 1 Name:
        <input
          type="text"
          name="exercise_1_name"
          onChange={handleChange}
          value={formData.exercise_1_name}
        />
      </label>
      <br />
      <label>
        Exercise 1 Reps:
        <input
          type="number"
          name="exercise_1_reps"
          onChange={handleChange}
          value={formData.exercise_1_reps}
        />
      </label>
      <br />
      <label>
        Exercise 2 Name:
        <input
          type="text"
          name="exercise_2_name"
          onChange={handleChange}
          value={formData.exercise_2_name}
        />
      </label>
      <br />
      <label>
        Exercise 2 Repetitions:
        <input
          type="number"
          name="exercise_2_reps"
          onChange={handleChange}
          value={formData.exercise_2_reps}
        />
      </label>
      <br />
      <label>
        Exercise 3 Name:
        <input
          type="text"
          name="exercise_3_name"
          onChange={handleChange}
          value={formData.exercise_3_name}
        />
      </label>
      <br />
      <label>
        Exercise 3 Repetitions:
        <input
          type="number"
          name="exercise_3_reps"
          onChange={handleChange}
          value={formData.exercise_3_reps}
        />
      </label>
      <br />
      <button type="submit">Create Workout</button>
    </form>
  );
}

export default CreateWorkout;
