import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [dataUsage, setDataUsage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/data_usage', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            setDataUsage(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, []);

    const renderDataUsage = () => {
        if (loading) return <p>Loading data...</p>;
        if (dataUsage) return <p>Data Usage: {dataUsage.data_used} MB</p>;
        return <p>No data available.</p>;
    };

    return (
        <div>
            <h1>CIAP Dashboard</h1>
            {renderDataUsage()}
        </div>
    );
}

export default Dashboard;
