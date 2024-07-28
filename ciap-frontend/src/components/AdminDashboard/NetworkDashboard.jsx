import React from 'react';
// import { BsPeopleFill, BsGraphUp } from 'react-icons/bs';
import { ResponsiveContainer, PieChart, Pie, Tooltip } from 'recharts';

function NetworkDashboard() {
  const data = [
    { name: 'Connected', value: 400 },
    { name: 'Disconnected', value: 100 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>Network Dashboard</h3>
      </div>
      <div className='charts'>
        <ResponsiveContainer width="50%" height={300}>
          <PieChart>
            <Pie dataKey="value" isAnimationActive={true} data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default NetworkDashboard;
