import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chart from "./components/Chart";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      <Routes>
        <Route path="/chat" element={<Chart />} />

        <Route path="/" element={<Home />} />
      </Routes>
      {/* Tinder Cards */}
      {/* Buttons below tinder cards */}

      {/* Chats screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
