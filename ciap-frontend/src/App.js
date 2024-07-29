import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import HomePage from './components/Home/HomePage';
import './App.css'; // Global styles

function App() {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('is_admin') === 'true';

  // Function to determine redirection based on authentication and role
  const getRouteElement = (Component, adminRequired = false) => {
    if (!token) {
      return <Navigate replace to="/login" />;
    }
    if (adminRequired && !isAdmin) {
      return <Navigate replace to="/" />;
    }
    return <Component />;
  };

  return (
    <BrowserRouter>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={getRouteElement(Dashboard)} />
          <Route path="/admin-dashboard" element={getRouteElement(AdminDashboard, true)} />
          <Route path="/login" element={!token ? <LoginForm /> : (isAdmin ? <Navigate replace to="/admin-dashboard" /> : <Navigate replace to="/dashboard" />)} />
          <Route path="/register" element={!token ? <RegisterForm /> : <Navigate replace to="/" />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
