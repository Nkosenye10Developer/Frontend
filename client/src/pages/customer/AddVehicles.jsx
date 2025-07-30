import React from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link, useNavigate } from 'react-router-dom';
import './AddVehicles.css'; // Create this CSS file

export const AddVehicles = () => {
  return (
    <CustomerLayout>
      <div className="add-vehicle-container">
        {/* Header Section */}
        <div className="vehicle-header">
          <h1 className="vehicle-title">
            <span className="text-muted">Vehicles</span>
            <i className='bx bx-chevron-right'></i>
            Add Vehicles
          </h1>
        </div>

        {/* Form Section */}
        <div className="vehicle-form-container">
          <form className="vehicle-form">
            {/* Form Row 1 */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Name:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter vehicle name"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Registration:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter registration number"
                />
              </div>
            </div>

            {/* Form Row 2 */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Mileage:</label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Enter current mileage"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Make:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter vehicle make"
                />
              </div>
            </div>

            {/* Form Row 3 - Add more fields as needed */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Model:</label>
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Enter vehicle model"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Year:</label>
                <input 
                  type="number" 
                  className="form-control" 
                  placeholder="Enter manufacturing year"
                  min="1900" 
                  max={new Date().getFullYear()}
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="form-actions">
              <button type="submit" className="btn btn-primary">
                Add Vehicle
              </button>
              <Link to='/vehicles' className="btn btn-outline-secondary">
                Back to Vehicles
              </Link>
            </div>
          </form>
        </div>
      </div>
    </CustomerLayout>
  );
};