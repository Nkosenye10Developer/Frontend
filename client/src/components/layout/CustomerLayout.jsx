import React, { useState, useEffect } from 'react';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import './Layout.css';
import { Outlet } from 'react-router-dom';

export const CustomerLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 1200);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app-container">
      <Topbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <main className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>
        {children}
        <Outlet />
      </main>
    </div>
  );
};