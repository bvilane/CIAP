import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import HomePage from './components/Home/HomePage';
import './App.css';

function App() {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    isAdmin: localStorage.getItem('is_admin') === 'true'
  });

  // Effect to monitor changes in local storage
  useEffect(() => {
    const handleStorageChange = () => {
      setAuth({
        token: localStorage.getItem('token'),
        isAdmin: localStorage.getItem('is_admin') === 'true'
      });
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <BrowserRouter>
      <Header auth={auth} setAuth={setAuth} />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={auth.token && !auth.isAdmin ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/admin-dashboard" element={auth.token && auth.isAdmin ? <AdminDashboard /> : <Navigate to="/login" />} />
          <Route path="/login" element={auth.token ? (auth.isAdmin ? <Navigate to="/admin-dashboard" /> : <Navigate to="/dashboard" />) : <LoginForm setAuth={setAuth} />} />
          <Route path="/register" element={auth.token ? <Navigate to="/" /> : <RegisterForm />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
