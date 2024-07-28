import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Use only useNavigate as useHistory is not used in React Router v6

function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        username: '',
        password: '',
        zone: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();  // Initialize useNavigate

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:5000/register', formData);
            alert('Registration successful! You can now login.');
            navigate('/login');  // Redirect to login page on success using navigate instead of history.push
        } catch (error) {
            setError('Failed to register: ' + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                </label>
                <label>
                    Surname:
                    <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} required />
                </label>
                <label>
                    Zone:
                    <select name="zone" value={formData.zone} onChange={handleInputChange} required>
                        {Array.from({ length: 14 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>Zone {i + 1}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
