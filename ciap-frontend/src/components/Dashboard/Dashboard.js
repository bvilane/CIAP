import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  // State to store user data usage
  const [dataUsage, setDataUsage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/data_usage', {
        headers: {
            // Assuming you're using JWT for authorization
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
      .then(response => {
        setDataUsage(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Ensure loading is set to false even if there is an error
      });
  }, []); // Empty dependency array to run only once on mount

  // Conditional rendering based on the loading state
  const renderDataUsage = () => {
    if (loading) return <p>Loading data...</p>;
    if (dataUsage) return <p>Data Usage: {dataUsage.data_used} MB</p>;
    return <p>No data available.</p>;
  };

  // Render the dashboard
  return (
    <div>
      <h1>CIAP Dashboard</h1>
      {renderDataUsage()}
    </div>
  );
}

export default Dashboard;
