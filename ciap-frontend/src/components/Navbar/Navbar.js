import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';  // Check if the path is correct

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('is_admin') === 'true';

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('is_admin');
        navigate('/');  // Navigate to homepage on logout
    };

    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">CIAP</Link>
            <div className="navbar-links">
                {token ? (
                    <>
                        {isAdmin ? <Link to="/admin-dashboard">Admin Dashboard</Link> : <Link to="/dashboard">Dashboard</Link>}
                        <button onClick={logout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
