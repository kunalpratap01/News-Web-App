import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import './App.css'; // Import your CSS file for styling

const App = () => {
  const [cat, setcat] = useState("general");
  const [mode, setMode] = useState("light"); // Add state for mode (light or dark)

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light"); // Toggle between light and dark mode
  };

  return (
    <div className={mode === "dark" ? "dark-mode" : "light-mode"}> 
      <Navbar setcat={setcat} />
      <button className="mode-button" onClick={toggleMode}>🌓</button>
      <NewsBoard cat={cat} />
    </div>
  );
}

export default App;
