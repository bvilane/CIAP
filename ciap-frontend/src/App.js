import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard'; // Import the AdminDashboard component
import LoginForm from './components/LoginForm';

function App() {
  const isAdmin = localStorage.getItem('is_admin') === 'true';

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the CIAP Home Page</h1>} />
        <Route path="/dashboard" element={isAdmin ? <Navigate replace to="/admin-dashboard" /> : <Dashboard />} />
        <Route path="/admin-dashboard" element={isAdmin ? <AdminDashboard /> : <Navigate replace to="/dashboard" />} />
        <Route path="/login" element={<LoginForm />} />
        {/* You can add other routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
