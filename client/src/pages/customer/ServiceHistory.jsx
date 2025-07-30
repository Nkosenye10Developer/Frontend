import React, { useState, useEffect } from 'react';
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link } from 'react-router-dom';
import './ServiceHistory.css';
import './Table.css'; // Assuming you have a Table.css for table styling

export const ServiceHistory = () => {
  // Sample data - replace with actual API calls
  const [serviceHistory, setServiceHistory] = useState([
    {
      id: 1,
      date: '2023-06-15',
      description: 'Oil change and filter replacement',
      status: 'Completed',
      serviceType: 'Maintenance',
      vehicle: 'Toyota Corolla (ABC123)',
      business: 'AutoCare Center'
    },
    {
      id: 2,
      date: '2023-05-10',
      description: 'Brake pad replacement',
      status: 'Completed',
      serviceType: 'Repair',
      vehicle: 'Toyota Corolla (ABC123)',
      business: 'QuickFix Garage'
    },
    {
      id: 3,
      date: '2023-04-05',
      description: 'Tire rotation and balancing',
      status: 'Completed',
      serviceType: 'Maintenance',
      vehicle: 'Toyota Corolla (ABC123)',
      business: 'AutoCare Center'
    }
  ]);

  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  // In a real app, you would fetch data from your API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service history:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredHistory = filter === 'all' 
    ? serviceHistory 
    : serviceHistory.filter(item => item.status.toLowerCase() === filter);

  return (
    <CustomerLayout>
      <div className="service-history-container">
        <div className="page-header">
          <h1>Service History</h1>
          <div className="filter-controls">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Services
            </button>
            <button 
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
            <button 
              className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
              onClick={() => setFilter('pending')}
            >
              Pending
            </button>
          </div>
        </div>

        {loading ? (
          <div className="loading-spinner">Loading service history...</div>
        ) : (
          <div className="table-container">
            {filteredHistory.length > 0 ? (
              <table className="authors-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Service Type</th>
                    <th>Vehicle</th>
                    <th>Business</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHistory.map((service) => (
                    <tr key={service.id}>
                      <td>{service.date}</td>
                      <td>{service.description}</td>
                      <td>{service.serviceType}</td>
                      <td>{service.vehicle}</td>
                      <td>{service.business}</td>
                      <td>
                        <span className={`status-badge ${service.status.toLowerCase()}`}>
                          {service.status}
                        </span>
                      </td>
                      <td>
                        <Link 
                          to={`/service-details/${service.id}`} 
                          className="action-link view-link"
                        >
                          View Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="no-results">
                <p>No service history found</p>
                <Link to="/request-service" className="btn btn-primary">
                  Request New Service
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </CustomerLayout>
  );
};