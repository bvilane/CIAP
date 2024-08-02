import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tutorials from './Tutorials'; // Import the Tutorials component
import Articles from './Articles'; // Import the Articles component
import Jobs from './Jobs'; // Import the Jobs component
import './Dashboard.css'; // Ensure the CSS file is linked

function Dashboard() {
    const [dataUsage, setDataUsage] = useState({ data_used: 0, total_data: 500 }); // Total data is 500 MB for demo
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/data_usage', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(response => {
            setDataUsage(prevDataUsage => ({ ...prevDataUsage, data_used: response.data.data_used }));
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
        });
    }, []); // Removed dataUsage from dependency array

    const renderDataUsage = () => {
        if (loading) return <p>Loading data...</p>;
        return <p>Data Used: {dataUsage.data_used} MB of {dataUsage.total_data} MB</p>;
    };

    return (
        <div className="dashboard">
            <h1>CIAP Dashboard</h1>
            {renderDataUsage()}
            <Tutorials />
            <Articles />
            <Jobs />
        </div>
    );
}

export default Dashboard;
