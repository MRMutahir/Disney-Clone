import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
