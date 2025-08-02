import React, { useState, useEffect } from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link, useNavigate } from 'react-router-dom';
import { createVehicle } from  '../../api/vehiclesApi';

export const AddVehicles = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    model: '',
    make: '',
    registrationNumber: '',
    mileage: '',
    claimNumber: '',
    customerId: ''
  });

  // Get customer ID from localStorage when component mounts
  useEffect(() => {
    const customerData = localStorage.getItem('customerObj');

    console.log('Customer Data:', customerData);
    if (customerData) {
      const customer = JSON.parse(customerData);
      setFormData(prev => ({
        ...prev,
        customerId: customer.customerId
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createVehicle(formData);
      alert('Vehicle added successfully!');
      navigate('/vehicles');
    } catch (error) {
      console.error('Error adding vehicle:', error);
      alert('Failed to add vehicle.');
    }
  };

  return (
    <CustomerLayout>
      <div className="add-vehicle-container">
        <div className="vehicle-header">
          <h1 className="vehicle-title">
            <span className="text-muted">Vehicles</span>
            <i className='bx bx-chevron-right'></i>
            Add Vehicles
          </h1>
        </div>

        <div className="vehicle-form-container">
          <form className="vehicle-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Make:</label>
                <input 
                  type="text" 
                  name="make"
                  className="form-control" 
                  value={formData.make}
                  onChange={handleChange}
                  placeholder="Enter vehicle make"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Model:</label>
                <input 
                  type="text" 
                  name="model"
                  className="form-control" 
                  value={formData.model}
                  onChange={handleChange}
                  placeholder="Enter vehicle model"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Registration Number:</label>
                <input 
                  type="text" 
                  name="registrationNumber"
                  className="form-control" 
                  value={formData.registrationNumber}
                  onChange={handleChange}
                  placeholder="Enter registration number"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Mileage:</label>
                <input 
                  type="number" 
                  name="mileage"
                  className="form-control" 
                  value={formData.mileage}
                  onChange={handleChange}
                  placeholder="Enter current mileage"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Claim Number:</label>
                <input 
                  type="text" 
                  name="claimNumber"
                  className="form-control" 
                  value={formData.claimNumber}
                  onChange={handleChange}
                  placeholder="Enter claim number"
                  required
                />
              </div>

              {/* Hidden customerId field */}
              <input 
                type="hidden"
                name="customerId"
                value={formData.customerId}
              />
            </div>

            <div className="">
              <button type="submit" className="btn btn-primary me-2">
                Add Vehicle
              </button>
              <Link to='/vehicles' className="btn btn-danger">
                Back to Vehicles
              </Link>
            </div>
          </form>
        </div>
      </div>
    </CustomerLayout>
  );
};