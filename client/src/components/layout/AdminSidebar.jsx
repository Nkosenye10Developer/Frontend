import React, { useState, useEffect, useRef } from 'react';
import './Layout.css';
import logo from '/logo.png';
import picture from '/Picture.png';


export const AdminSidebar = ({ isOpen, onToggle }) => {
    const sidebarRef = useRef(null);
    const [activeLink, setActiveLink] = useState('Dashboard');
  
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
  
    // Set active nav link
    const handleLinkClick = (linkName) => {
      setActiveLink(linkName);
      if (window.innerWidth <= 1200) {
        onToggle();
      }
    };
  
    const menuItems = [
      { icon: 'bx bx-home-alt', text: 'Dashboard' },
      { icon: 'bx bx-bar-chart-alt-2', text: 'My Vehicles' },
      { icon: 'bx bx-bell', text: 'Wallet' },
      { icon: 'bx bx-pie-chart-alt', text: 'Service History' },
      { icon: 'bx bx-heart', text: 'Referrals' },
    //   { icon: 'bx bx-heart', text: 'Doctors Records' },
    //   { icon: 'bx bxs-injection', text: 'Pharmacist' },
    //   { icon: 'bx bx-plus-medical', text: 'Medication Records' },
    //   { icon: 'bx bxs-capsule', text: 'Medication Stock' },
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
                <img src={logo} alt="" className="rounded-circle" />
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
                    onClick={() => handleLinkClick(item.text)}
                  >
                    <a href="#" className="d-flex align-items-center">
                      <i className={`${item.icon} icon`}></i>
                      {isOpen && <span className="text nav-text">{item.text}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            <div className="bottom-content">
              <li className="logout">
                <a href="#" className="d-flex align-items-center">
                  <i className='bx bx-log-out icon text-white'></i>
                  {isOpen && <span className="text nav-text text-white">Logout</span>}
                </a>
              </li>
              {isOpen && (
                <li className="search-box d-flex align-items-center mt-2">
                  <img src={picture} alt="" className="me-1" />
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