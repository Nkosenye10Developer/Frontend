import React from 'react';
import './Layout.css';

export const Topbar = ({ toggleSidebar, isSidebarOpen, isMobile }) => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <i className={`bx ${isSidebarOpen ? 'bx-menu-alt-left' : 'bx-menu'}`} />
        </button>
        <h2 className="page-title">Dashboard</h2>
      </div>
      
      <div className="topbar-right">
        <div className="search-box">
          <i className="bx bx-search" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user-actions">
          <button className="notification-btn">
            <i className="bx bx-bell" />
            <span className="notification-badge">3</span>
          </button>
        </div>
      </div>
    </header>
  );
};