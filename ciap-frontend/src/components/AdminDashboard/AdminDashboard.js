import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import NetworkDashboard from './NetworkDashboard';
import NodesTable from './NodesTable';
import './AdminDashboard.css'; // Adjust the path based on where you save the file

function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header openSidebar={openSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} openSidebar={openSidebar} />
      <NetworkDashboard />
      <NodesTable />
    </div>
  );
}

export default AdminDashboard;
