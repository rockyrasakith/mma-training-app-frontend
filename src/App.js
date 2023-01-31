import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateWorkout from "./components/CreateWorkout";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import RandomWorkout from "./components/RandomWorkout";
import RegisterUser from "./components/RegisterUser";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-workout" element={<CreateWorkout />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/random-workout" element={<RandomWorkout />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
