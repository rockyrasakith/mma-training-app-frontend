import React, { useState, useEffect } from "react";

const RandomWorkout = () => {
  const [workout, setWorkout] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkout = async () => {
      setLoading(true);
      try {
        const res = await fetch("/random_workout");
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred: {error.message}</p>;

  return (
    <div>
      <h2>Random Workout</h2>
      <p>Name: {workout.name}</p>
      <p>Workout Position: {workout.workout_position}</p>
      <p>Exercise 1: {workout.exercise_1}</p>
      <p>Exercise 1 reps: {workout.exercise_1_reps}</p>
      <p>Exercise 2: {workout.exercise_2}</p>
      <p>Exercise 2 reps: {workout.exercise_2_reps}</p>
      <p>Exercise 3: {workout.exercise_3}</p>
      <p>Exercise 3 reps: {workout.exercise_3_reps}</p>
    </div>
  );
};

export default RandomWorkout;
