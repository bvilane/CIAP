import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm'; // Assume you have this component
import HomePage from './components/Home/HomePage';
import './App.css';  // Global styles


function App() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('is_admin') === 'true';

  return (
    <BrowserRouter>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}> {/* Adjust height as necessary */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={token && !isAdmin ? <Dashboard /> : <Navigate replace to="/" />} />
          <Route path="/admin-dashboard" element={token && isAdmin ? <AdminDashboard /> : <Navigate replace to="/" />} />
          <Route path="/login" element={!token ? <LoginForm /> : (isAdmin ? <Navigate replace to="/admin-dashboard" /> : <Navigate replace to="/dashboard" />)} />
          <Route path="/register" element={!token ? <RegisterForm /> : <Navigate replace to="/" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
