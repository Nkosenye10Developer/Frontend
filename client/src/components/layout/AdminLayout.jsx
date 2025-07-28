import React, { useState, useEffect } from 'react';
import { Topbar } from './Topbar';
import { AdminSidebar } from './AdminSidebar';
import './Layout.css';


export const AdminLayout = ({ children }) => {
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
      <AdminSidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <main className={`home ${isSidebarOpen ? 'shifted' : ''}`}>
        {children}
      </main>
    </div>
  );
};