import React from 'react';
import { BsFillBellFill, BsPersonCircle, BsJustify } from 'react-icons/bs';

function Header({ openSidebar }) {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={openSidebar}/>
      </div>
      <div className='header-right'>
        <BsFillBellFill className='icon'/>  {/* Alerts icon */}
        <BsPersonCircle className='icon'/>  {/* Admin profile icon */}
      </div>
    </header>
  );
}

export default Header;
