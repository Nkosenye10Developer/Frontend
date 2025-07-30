import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation,useNavigate } from 'react-router-dom';
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
    toast.success("Logged out");
    navigate('/'); // or wherever your login page is
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
    if (path.includes('vehicles')) setActiveLink('Business Application');
    else if (path.includes('wallet')) setActiveLink('Customer');
    else if (path.includes('history')) setActiveLink('Service History');
    else if (path.includes('referrals')) setActiveLink('Referrals');
    else setActiveLink('Dashboard');
  }, [location]);

  const menuItems = [
    { path: '/dashboard', icon: 'bx bx-home-alt', text: 'Dashboard' },
    { path: '/vehicles', icon: 'bx bx-car', text: 'Business Application' },
    { path: '/wallet', icon: 'bx bx-wallet', text: 'Customer' },
    { path: '/history', icon: 'bx bx-history', text: 'Manage Reports' },
    { path: '/referrals', icon: 'bx bx-share-alt', text: 'Stats' },
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

      {/* Sidebar */}
      <nav 
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'active' : ''} ${!isOpen ? 'close' : ''}`}
      >
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="AutoFix Logo" className="rounded-circle" />
            </span>
            {isOpen && (
              <div className="text logo-text">
                <span className="name text-black">AutoFix</span>
              </div>
            )}
          </div>
          <i 
            className={`bx ${isOpen ? 'bx-chevron-left' : 'bx-chevron-right'} toggle`}
            onClick={onToggle}
          />
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links list-unstyled">
              {menuItems.map((item) => (
                <li 
                  key={item.text}
                  className={`nav-link ${activeLink === item.text ? 'active' : ''}`}
                  onClick={() => {
                    setActiveLink(item.text);
                    if (window.innerWidth <= 1200) onToggle();
                  }}
                >
                  <NavLink 
                    to={item.path} 
                    className="d-flex align-items-center"
                    activeClassName="active"
                  >
                    <i className={`${item.icon} icon`}></i>
                    {isOpen && <span className="text nav-text">{item.text}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="bottom-content">
            <li className="logout">
            
            <button onClick={logout} className="d-flex align-items-center btn btn-danger w-100"> <i className='bx bx-log-out icon text-white'></i> Logout</button>
            
            </li>
            {isOpen && (
              <li className="search-box d-flex align-items-center mt-2">
                <img src={picture} alt="User" className="me-1" />
                <div className="names">
                  <span className="text-black text-nowrap">Nkosenye Hleza</span>
                  <span className="role d-block">Customer</span>
                </div>
              </li>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};