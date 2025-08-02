import React from 'react';
import './Loader.css';
import logo from '../../assets/logo.png'; // Adjust path to your logo

export const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <img 
          src={logo} 
          alt="Loading" 
          className="loader-logo" 
          width={120} 
          height={120}
        />
        <div className="loader-spinner"></div>
        {message && (
          <p style={{ 
            marginTop: '10px', 
            color: '#666', 
            fontSize: '16px',
            fontWeight: '500' 
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};