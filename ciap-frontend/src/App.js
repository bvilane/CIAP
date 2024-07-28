import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import LoginForm from './components/LoginForm';
import HomePage from './components/HomePage'; 

function App() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('is_admin') === 'true';

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={!token ? <HomePage /> : (isAdmin ? <Navigate replace to="/admin-dashboard" /> : <Navigate replace to="/dashboard" />)} />
        <Route path="/dashboard" element={token && !isAdmin ? <Dashboard /> : <Navigate replace to="/" />} />
        <Route path="/admin-dashboard" element={token && isAdmin ? <AdminDashboard /> : <Navigate replace to="/" />} />
        <Route path="/login" element={!token ? <LoginForm /> : (isAdmin ? <Navigate replace to="/admin-dashboard" /> : <Navigate replace to="/dashboard" />)} />
        {/* Additional routes can be redirected similarly to ensure proper access control */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
