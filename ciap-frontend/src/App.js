import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import HomePage from './components/Home/HomePage';
import './App.css'; // Ensure this is the correct path for global styles

function App() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('is_admin') === 'true';

  // Determine redirection based on authentication and role
  const getRouteElement = (Component, { adminRequired = false } = {}) => {
    if (!token) {
      return <Navigate replace to="/login" />;
    } 
    if (adminRequired && !isAdmin) {
      return <Navigate replace to="/dashboard" />;
    }
    if (!adminRequired && isAdmin) {
      return <Navigate replace to="/admin-dashboard" />;
    }
    return <Component />;
  };

  return (
    <BrowserRouter>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}> {/* Ensures content area is visually full height minus footer */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={getRouteElement(Dashboard)} />
          <Route path="/admin-dashboard" element={getRouteElement(AdminDashboard, { adminRequired: true })} />
          <Route path="/login" element={!token ? <LoginForm /> : <Navigate replace to={isAdmin ? "/admin-dashboard" : "/dashboard"} />} />
          <Route path="/register" element={<RegisterForm />} /> {/* Register is always accessible */}
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
