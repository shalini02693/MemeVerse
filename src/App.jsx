import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import HomePage from "./pages/HomePage";
import MemeExplorer from './pages/MemeExplorer';
import ProfilePage from './pages/ProfilePage';
import LeaderboardPage from './pages/LeaderboardPage';
import NotFoundPage from './pages/NotFoundPage';
import MemeUpload from './pages/MemeUpload';
import MemeDetails from './pages/MemeDetails';
import Navbar from './pages/Navbar';

import "./style.css";

function App() {

  return (
    <Router>
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<MemeExplorer />} />
          <Route path="/upload" element={<MemeUpload />} />
          <Route path="/meme/:id" element={<MemeDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
