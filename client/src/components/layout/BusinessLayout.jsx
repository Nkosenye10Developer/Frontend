import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { BusinessSidebar } from './BusinessSidebar';
import { Topbar } from './Topbar';
import { Loader } from '../Loader/Loader';
import './Layout.css';

export const BusinessLayout = ({ children }) => {
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

    const initializeBusinessLayout = async () => {
      // Handle resize on mount
      handleResize();
      
      // Simulate business initialization (replace with real logic like loading business data)
      // For example: await loadBusinessProfile(), await getBusinessSettings(), etc.
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsLoading(false);
    };

    initializeBusinessLayout();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Show loader while initializing business layout
  if (isLoading) {
    return <Loader message="Loading business dashboard..." />;
  }

  return (
    <div className="app-container">
      <BusinessSidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      
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