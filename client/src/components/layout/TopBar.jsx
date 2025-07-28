import React from 'react';
import './Layout.css';

export const Topbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="top-navbar">
      <div className="navbar-left">
        <i 
          className={`bx ${isSidebarOpen ? 'bx-x' : 'bx-menu'} sidebar-toggle`}
          onClick={toggleSidebar}
        />
        <div className="greeting">
          <h4>Hello Simphiwe 🤘</h4>
        </div>
      </div>
      <div className="navbar-right">
        <div className="search-box">
          <i className='bx bx-search'></i>
          <input type="text" placeholder="Search for anything here.." />
        </div>
      </div>
    </nav>
  );
};