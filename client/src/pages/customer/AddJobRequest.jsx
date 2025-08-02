import React, { useState, useEffect } from 'react';
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link, useNavigate } from 'react-router-dom';
import { getAllVehicles } from '../../api/vehiclesApi';
import { getAllBusiness } from '../../api/businessApi';
import { getAllServices } from '../../api/serviceTypeApi';
import { createJobRequest } from '../../api/jobRequestApi';

export const AddJobRequest = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    description: '',
    serviceTypeId: '',
    vehicleId: '',
    businessId: '',
    customerId: '',
    rejectReason:'',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [businesses, setBusinesses] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get customer data from localStorage
        const customerString = localStorage.getItem('customerObj');
        const customerData = customerString ? JSON.parse(customerString) : null;
        
        const userString = localStorage.getItem('userObj');
        const userData = userString ? JSON.parse(userString) : null;
        
        console.log('Customer Data:', customerData);
        console.log('User Data:', userData);

        if (customerData?.customerId) {
          setFormData(prev => ({
            ...prev,
            customerId: customerData.customerId,
          }));
    
          // Fetch vehicles for this customer
          await fetchVehicles(customerData.customerId);
          
          // Fetch businesses based on user's location
          if (userData?.cityId && userData?.provinceId) {
            await fetchBusiness(userData.cityId, userData.provinceId);
          }
        }
    
        // Fetch all services
        await fetchServices();
      } catch (error) {
        console.error('Error initializing data:', error);
        setError('Failed to initialize form data');
      }
    };

    fetchData();
  }, []);

  const fetchVehicles = async (customerId) => {
    try {
      const res = await getAllVehicles(customerId);
      // Handle both array response and $values structure
      const vehiclesData = Array.isArray(res) ? res : (res?.$values || []);
      setVehicles(vehiclesData);
    } catch (err) {
      console.error('Failed to fetch vehicles:', err);
      setVehicles([]);
      setError('Failed to load vehicles');
    }
  };

  const fetchBusiness = async (cityId, provinceId) => {
    try {
      if (!cityId || !provinceId) return;
      const res = await getAllBusiness(cityId, provinceId);
      // Handle both array response and $values structure
      const businessesData = Array.isArray(res) ? res : (res?.$values || []);
      setBusinesses(businessesData);
    } catch (err) {
      console.error('Failed to fetch businesses:', err);
      setBusinesses([]);
      setError('Failed to load businesses');
    }
  };

  const fetchServices = async () => {
    try {
      const res = await getAllServices();
      // Handle the $values structure from your example
      const servicesData = res?.$values || [];
      setServices(servicesData);
    } catch (err) {
      console.error('Failed to fetch services:', err);
      setServices([]);
      setError('Failed to load services');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createJobRequest(formData);
      navigate('/jobrequest');
    } catch (err) {
      console.error('Error creating job request:', err);
      setError(err.response?.data?.message || 'Failed to create job request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomerLayout>
      <div className="container-fluid w-100">
        <div className="mb-4">
          <h1>
            <span className="text-muted">Job Request</span>
            <i className='bx bx-chevron-right'></i> Add New Request
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              required
            />
          </div>

          <div className="form-group mb-3">
            <label>Service Type</label>
            <select
              name="serviceTypeId"
              className="form-control"
              value={formData.serviceTypeId}
              onChange={handleChange}
              required
            >
              <option value="">Select Service</option>
              {services.map(service => (
                <option key={service.serviceTypeId} value={service.serviceTypeId}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Vehicle</label>
            <select
              name="vehicleId"
              className="form-control"
              value={formData.vehicleId}
              onChange={handleChange}
              required
            >
              <option value="">Select Vehicle</option>
              {vehicles.map(vehicle => (
                <option key={vehicle.vehicleId} value={vehicle.vehicleId}>
                  {vehicle.make} {vehicle.model} ({vehicle.registrationNumber})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Business</label>
            <select
              name="businessId"
              className="form-control"
              value={formData.businessId}
              onChange={handleChange}
              required
            >
              <option value="">Select Business</option>
              {businesses.map(business => (
                <option key={business.businessId} value={business.businessId}>
                  {business.name}
                </option>
              ))}
            </select>
          </div>


          <input 
                type="hidden"
                name="customerId"
                value={formData.customerId}
              />
          <div className="form-actions mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Submitting...
                </>
              ) : 'Submit Request'}
            </button>
            <Link to='/jobrequest' className="btn btn-danger ms-2">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </CustomerLayout>
  );
};