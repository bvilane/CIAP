import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
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
                setSuccess('Admin login successful!');
                setTimeout(() => {
                    navigate('/admin-dashboard');
                }, 2000);
            } else {
                setSuccess('Login successful! You have received 500 MB free to browse the resources.');
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            }
        } catch (error) {
            setError(`Failed to login: ${error.response?.data?.message || error.message}`);
            console.error('Login error:', error.response || error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <form onSubmit={handleLogin}>
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
