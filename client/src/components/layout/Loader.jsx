// src/components/Loader/Loader.jsx
import React from 'react';
import './Loader.css';
import logo from '../../assets/logo.png'; // Adjust path to your logo

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <img 
          src={logo} 
          alt="Your Logo" 
          className="loader-logo" 
          width={120} 
          height={120}
        />
        <div className="loader-spinner"></div>
      </div>
    </div>
  );
};

