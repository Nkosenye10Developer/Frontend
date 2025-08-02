import React, { useState, useEffect } from 'react';
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ServiceHistory = () => {
  const [serviceHistory, setServiceHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // 'all', 'completed', 'pending'

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace this with your actual API call
        await new Promise(resolve => setTimeout(resolve, 800));
        setServiceHistory([]); // Set fetched data here
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service history:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredHistory =
    filter === 'all'
      ? serviceHistory
      : serviceHistory.filter(item => item.status.toLowerCase() === filter);

  const statusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'completed':
        return <span className="badge bg-success">Completed</span>;
      case 'pending':
        return <span className="badge bg-warning text-dark">Pending</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  return (
    <CustomerLayout>
      <div className="container-fluid">
        <h2 className="fw-bold">Service History</h2>
        <p className="text-muted">Your vehicle service records and updates</p>

        {/* Filter Buttons */}
        <div className="btn-group mb-3">
          <button
            className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Services
          </button>
          <button
            className={`btn btn-outline-primary ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button
            className={`btn btn-outline-primary ${filter === 'pending' ? 'active' : ''}`}
            onClick={() => setFilter('pending')}
          >
            Pending
          </button>
        </div>

        {/* Table */}
        {loading ? (
          <div className="text-center py-5">Loading service history...</div>
        ) : filteredHistory.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead className="table-light">
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
                    <td>{statusBadge(service.status)}</td>
                    <td>
                      <Link
                        to={`/service-details/${service.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="alert alert-info mt-4">
            <p className="mb-2">No service history found.</p>
            <Link to="/request-service" className="btn btn-primary">
              Request New Service
            </Link>
          </div>
        )}
      </div>
    </CustomerLayout>
  );
};
