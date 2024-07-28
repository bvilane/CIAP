import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  // State to store the data fetched from the backend
  const [data, setData] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/data') // Adjust the URL to match your backend route
      .then(response => {
        setData(response.data); // Store the data in state
      })
      .catch(error => {
        console.error('Error fetching data:', error); // Log any error to the console
      });
  }, []); // The empty array ensures this effect runs only once after initial render

  // Render the dashboard
  return (
    <div>
      <h1>Welcome to the CIAP Dashboard</h1>
      {data ? <p>Data fetched from backend: {JSON.stringify(data)}</p> : <p>Loading data...</p>}
    </div>
  );
}

export default Dashboard;
