import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Layout.css';
import logo from '/logo.png';
import picture from '/Picture.png';
import toast from 'react-hot-toast';

export const AdminSidebar = ({ isOpen, onToggle }) => {
  const sidebarRef = useRef(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Dashboard');
  const navigate = useNavigate();

  const logout = async () => {
    toast.success("Logged out successfully");
    navigate('/login');
  };

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth <= 1200 && 
          isOpen &&
          sidebarRef.current && 
          !sidebarRef.current.contains(e.target)) {
        onToggle();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  // Set active nav link based on current route

  useEffect(() => {
    const path = location.pathname;
    if (path.includes('businessapplication')) setActiveLink('Business Application');
    else if (path.includes('viewcustomer')) setActiveLink('ViewCustomer');
    else if (path.includes('managereport')) setActiveLink('Manage Reports');
    else if (path.includes('communications')) setActiveLink('Communications');
    else if (path.includes('managebusinesses')) setActiveLink('Manage Businesses');
    else if (path.includes('stats')) setActiveLink('Stats');
    else setActiveLink('Dashboard');
  }, [location]);

  const menuItems = [
    { path: '/admindashboard', icon: 'bx bx-home-alt', text: 'Dashboard' },
    { path: '/businessapplication', icon: 'bx bx-clipboard', text: 'Business Application' },
    { path: '/viewcustomer', icon: 'bx bx-user', text: 'View Customer' },
    { path: '/managereports', icon: 'bx bx-chart', text: 'Manage Reports' },
    { path: '/stats', icon: 'bx bx-bar-chart-alt-2', text: 'Stats' },
    { path: '/communications', icon: 'bx bx-chat', text: 'Communications' },
    { path: '/managebusinesses', icon: 'bx bx-buildings', text: 'Manage Businesses' },
  ];

  return (
    <>
      {/* Sidebar Overlay (for mobile) */}
      {isOpen && window.innerWidth <= 1200 && (
        <div 
          className="sidebar-overlay active"
          onClick={onToggle}
        />
      )}

      {/* Premium Sidebar */}
      <nav 
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'active' : ''} ${!isOpen ? 'close' : ''}`}
      >
        <header className="sidebar-header">
          <div className="logo-container">
            <div className="logo-image">
              <img src={logo} alt="AutoFix Logo" />
            </div>
            {isOpen && (
              <div className="logo-text">
                <span className="app-name">Auto Care Link</span>
                <span className="app-tagline">Vehicle Services</span>
              </div>
            )}
          </div>
          <button 
            className="sidebar-toggle"
            onClick={onToggle}
            aria-label="Toggle sidebar"
          >
            <i className={`bx ${isOpen ? 'bx-chevron-left' : 'bx-chevron-right'}`} />
          </button>
        </header>

        <div className="sidebar-menu">
          <ul className="menu-items">
            {menuItems.map((item) => (
              <li 
                key={item.text}
                className={`menu-item ${activeLink === item.text ? 'active' : ''}`}
                onClick={() => {
                  setActiveLink(item.text);
                  if (window.innerWidth <= 1200) onToggle();
                }}
              >
                <NavLink 
                  to={item.path} 
                  className="menu-link"
                >
                  <i className={`${item.icon} menu-icon`}></i>
                  {isOpen && <span className="menu-text">{item.text}</span>}
                  {isOpen && activeLink === item.text && (
                    <div className="active-indicator"></div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="sidebar-footer">
            <div className="user-profile">
              {isOpen && (
                <div className="profile-info">
                  <img src={picture} alt="User" className="profile-image" />
                  <div className="profile-details">
                    <span className="profile-name">Nkosenye Hleza</span>
                    <span className="profile-role">Admin</span>
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={logout}
              className="logout-button"
            >
              <i className='bx bx-log-out'></i>
              {isOpen && <span>Logout</span>}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};