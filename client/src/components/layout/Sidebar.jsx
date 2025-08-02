import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './Layout.css';
import logo from '/logo.png';
import picture from '/Picture.png';
import toast from 'react-hot-toast';

export const Sidebar = ({ isOpen, onToggle }) => {
  const sidebarRef = useRef(null);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('Dashboard');
  const navigate = useNavigate();

  // const logout = async () => {
  //   toast.success("Logged out successfully");
  //   navigate('/login');
  // };



  const logout = async () => {
    try {
        

        if (res.ok) {
            // Redirect to login or homepage
            toast.success("Logged out");
            navigate('/'); // or wherever your login page is
        } else {
            toast.error("Logout failed");
        }
    } catch (error) {
        console.error("Logout error:", error);
        toast.error("Logout error");
    }
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
    if (path.includes('vehicles')) setActiveLink('My Vehicles');
    else if (path.includes('wallet')) setActiveLink('Wallet');
    else if (path.includes('jobcards')) setActiveLink('Job Cards');
    else if (path.includes('history')) setActiveLink('Service History');
    else if (path.includes('jobrequest')) setActiveLink('Job Request');
    else if (path.includes('referrals')) setActiveLink('Referrals');
    else if (path.includes('dashboard')) setActiveLink('Dashboard');
  }, [location]);

  const menuItems = [
    { path: '/dashboard', icon: 'bx bx-home-alt', text: 'Dashboard' },
    { path: '/vehicles', icon: 'bx bx-car', text: 'My Vehicles' },
    { path: '/wallet', icon: 'bx bx-wallet', text: 'Wallet' },
    { path: '/jobcards', icon: 'bx bx-task', text: 'Job Cards' },
    { path: '/history', icon: 'bx bx-history', text: 'Service History' },
    { path: '/jobrequest', icon: 'bx bx-wrench', text: 'Job Request' },
    { path: '/referrals', icon: 'bx bx-share-alt', text: 'Referrals' },
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
                    <span className="profile-role">Customer</span>
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