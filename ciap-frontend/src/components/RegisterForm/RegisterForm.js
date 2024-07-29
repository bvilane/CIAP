import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

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
            navigate('/login');
        } catch (error) {
            setError(`Failed to register: ${error.response?.data?.message || error.message}`);
            console.error('Registration error:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Surname:</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Zone:</label>
                    <select name="zone" value={formData.zone} onChange={handleInputChange}>
                        {Array.from({ length: 14 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>Zone {i + 1}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;
