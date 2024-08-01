import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', {
                username,
                password
            });

            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('is_admin', response.data.is_admin);

            if (response.data.is_admin) {
                setMessage('Admin login successful!');
                setTimeout(() => {
                    window.open('/admin-dashboard', '_blank'); // Open in a new tab
                    navigate('/');
                }, 2000);
            } else {
                setMessage('Login successful! You have received 500 MB free to browse the resources.');
                setTimeout(() => {
                    window.open('/dashboard', '_blank'); // Open in a new tab
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            setError('Failed to login');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                {message && <p>{message}</p>}
                {error && <p className="error">{error}</p>}
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
