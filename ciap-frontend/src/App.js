// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';  // Make sure to import LoginForm
import RegisterForm from './components/RegisterForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to the CIAP Home Page</h1>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* Add other routes and components as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
