import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { Loader } from '../Loader/Loader';
import './Layout.css';

export const CustomerLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1200;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    const initializeLayout = async () => {
      // Handle resize on mount
      handleResize();
      
      // Simulate initialization time (you can replace this with actual initialization logic)
      // For example: loading user data, checking permissions, etc.
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsLoading(false);
    };

    initializeLayout();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Show loader while initializing
  if (isLoading) {
    return <Loader message="Loading..." />;
  }

  return (
    <div className="app-container">
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
      <div className={`main-content ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
        <Topbar 
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isMobile={isMobile}
        />
        
        <div className="content-wrapper">
          <Outlet />
          {children}
        </div>
      </div>
    </div>
  );
};