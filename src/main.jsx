import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Letter from "./pages/Letter"; 
import TheBirthdayLetter from "./pages/TheBirthdayLetter";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AudioPlayer />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/the-birthday-letter" element={<TheBirthdayLetter />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
