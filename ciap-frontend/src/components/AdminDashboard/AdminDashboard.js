import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import NetworkDashboard from './NetworkDashboard';
import NodesTable from './NodesTable';
import './AdminDashboard.css'; 

function AdminDashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const toggleSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className='admin-dashboard'>
            <Header />
            <Sidebar openSidebarToggle={openSidebarToggle} toggleSidebar={toggleSidebar} />
            <div className="main-content">
                <NetworkDashboard />
                <NodesTable />
            </div>
        </div>
    );
}

export default AdminDashboard;
