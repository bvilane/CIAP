import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';  // Import useHistory

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
    const history = useHistory();  // Initialize useHistory

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            alert('Registration successful! You can now login.');
            history.push('/login');  // Redirect to login page on success
        } catch (error) {
            setError('Failed to register');
            console.error('Registration error:', error.response?.data?.message || error.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                </label>
                <label>
                    Surname:
                    <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </label>
                <label>
                    Username:
                    <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
                </label>
                <label>
                    Zone:
                    <select name="zone" value={formData.zone} onChange={handleInputChange}>
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
