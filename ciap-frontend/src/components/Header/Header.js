import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token'));

    useEffect(() => {
        // Set up a listener for changes in authentication status
        const handleAuthChange = () => {
            setIsLoggedIn(localStorage.getItem('token'));
        };

        // You might emit an event when login or logout happens elsewhere in your app
        window.addEventListener('authChange', handleAuthChange);

        return () => {
            window.removeEventListener('authChange', handleAuthChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(null);
        navigate('/login', { replace: true });  // Ensure user cannot go back to dashboard after logout
        window.dispatchEvent(new Event('authChange'));  // Notify application of auth change
    };

    return (
        <div className="header">
            <div className="logo">
                <Link to="/" className="navbar-brand">CIAP</Link>
            </div>
            <nav className="navigation">
                <Link to="/" className="nav-link">Home</Link>
                {isLoggedIn ? (
                    <>
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <button onClick={handleLogout} className="nav-link" style={{background: 'none', border: 'none', color: 'white', cursor: 'pointer'}}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link">Register</Link>
                    </>
                )}
            </nav>
        </div>
    );
};

export default Header;
