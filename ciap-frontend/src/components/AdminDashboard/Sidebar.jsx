import React from 'react';
import { BsPeopleFill, BsGraphUp, BsFillGearFill } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, openSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>CIAP</div>
                <span className='icon close_icon' onClick={openSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <button onClick={() => {/* Add your function here for Users */}}>
                        <BsPeopleFill className='icon' /> Users
                    </button>
                </li>
                <li className='sidebar-list-item'>
                    <button onClick={() => {/* Add your function here for Network Status */}}>
                        <BsGraphUp className='icon' /> Network Status
                    </button>
                </li>
                <li className='sidebar-list-item'>
                    <button onClick={() => {/* Add your function here for Settings */}}>
                        <BsFillGearFill className='icon' /> Settings
                    </button>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar;
