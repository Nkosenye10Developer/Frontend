import React, { useState } from 'react';
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link, useNavigate } from 'react-router-dom';
import './AddJobRequest.css'; // We'll create this CSS file

export const AddJobRequest = () => {
  const [formData, setFormData] = useState({
    description: '',
    serviceTypeId: '',
    vehicleId: '',
    businessId: '',
    customerId: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Mock data - replace with actual API calls
  const serviceTypes = [
    { id: 1, name: 'Oil Change' },
    { id: 2, name: 'Tire Rotation' },
    { id: 3, name: 'Brake Service' }
  ];

  const vehicles = [
    { id: 1, registration: 'ABC123', make: 'Toyota' },
    { id: 2, registration: 'XYZ789', make: 'Honda' }
  ];

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
      // In a real app, you would call your API here
      // await axios.post('/api/jobrequests', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      navigate('/jobrequest?success=true');
    } catch (err) {
      setError(err.message || 'Failed to create job request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CustomerLayout>
      <div className="job-request-container">
        <div className="job-request-header">
          <h1>
            <span className="text-muted">Job Request</span>
            <i className='bx bx-chevron-right'></i>
            Add New Request
          </h1>
        </div>

        <div className="job-request-form-container">
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="alert alert-danger">
                {error}
              </div>
            )}

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Service Type</label>
                <select
                  name="serviceTypeId"
                  className="form-control"
                  value={formData.serviceTypeId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Service Type</option>
                  {serviceTypes.map(service => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
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
                    <option key={vehicle.id} value={vehicle.id}>
                      {vehicle.make} ({vehicle.registration})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* These would typically be hidden fields populated from user context */}
            <input type="hidden" name="businessId" value={formData.businessId} />
            <input type="hidden" name="customerId" value={formData.customerId} />

            <div className="form-actions">
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
              <Link to='/jobrequest' className="btn btn-outline-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </CustomerLayout>
  );
};