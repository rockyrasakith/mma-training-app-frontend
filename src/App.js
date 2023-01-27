import { useState } from "react";
import "./App.css";
import CreateWorkout from "./components/CreateWorkout";
import RandomWorkout from "./components/RandomWorkout";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    setFormData({
        ...formData,
        [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send a post request to create a new user
    fetch('/new_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the response from the server, for example by displaying a message to the user
    })
    .catch(error => {
        console.log(error);
        // Handle any errors that occurred during the request
    });
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
      
      <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={handleChange} value={formData.name} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" onChange={handleChange} value={formData.email} />
            </label>
            <br />
            <button type="submit">Create User</button>
        </form>
        <CreateWorkout />
        <RandomWorkout />
        </header>
    </div>
  );
}

export default App;
