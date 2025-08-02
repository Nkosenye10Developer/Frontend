import React, { useEffect, useState } from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link } from 'react-router-dom';
import { getAllJobRequest } from "../../api/jobRequestApi";
import { toast } from "react-hot-toast";

export const JobRequest = () => {
  const [jobRequests, setJobRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchJobRequests = async () => {
      try {
        const customerData = JSON.parse(localStorage.getItem('customerObj'));
        const customerId = customerData?.customerId;

        if (!customerId) {
          throw new Error("Customer ID not found");
        }

        const response = await getAllJobRequest(customerId);
        // Handle both direct array and $values structure
        const requests = Array.isArray(response) ? response : (response?.$values || []);
        setJobRequests(requests);
      } catch (err) {
        console.error("Error fetching job requests:", err);
        setError(err.message);
        toast.error("Failed to load job requests");
      } finally {
        setLoading(false);
      }
    };

    fetchJobRequests();
  }, []);

  const filteredRequests = jobRequests.filter(job => {
    const searchLower = searchTerm.toLowerCase();
    return (
      job.description?.toLowerCase().includes(searchLower) ||
      job.status?.toLowerCase().includes(searchLower) ||
      job.vehicle?.model?.toLowerCase().includes(searchLower) ||
      job.serviceType?.name?.toLowerCase().includes(searchLower) ||
      job.business?.name?.toLowerCase().includes(searchLower)
    );
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Approved':
        return <span className="badge bg-success">{status}</span>;
      case 'Rejected':
        return <span className="badge bg-danger">{status}</span>;
      case 'Pending':
        return <span className="badge bg-warning text-dark">{status}</span>;
      default:
        return <span className="badge bg-secondary">{status || 'Unprocessed'}</span>;
    }
  };

  if (loading) {
    return (
      <CustomerLayout>
        <div className="container-fluid w-100 text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </CustomerLayout>
    );
  }

  if (error) {
    return (
      <CustomerLayout>
        <div className="container-fluid w-100">
          <div className="alert alert-danger">{error}</div>
        </div>
      </CustomerLayout>
    );
  }

  return (
    <CustomerLayout>
      <div className="container-fluid w-100">
        <h1 className="text-black">Job Request</h1>

        <div className="row mb-3">
          <div className="col-md-6 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search Job Request..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <Link to="/add-jobrequest" className="btn btn-primary w-100 h-100 p-2 text-nowrap">
              <i className="bi bi-plus-circle"></i> Add Job Request
            </Link>
          </div>
        </div>

        {/* Cards Display */}
        <div className="row">
          {filteredRequests.length === 0 ? (
            <div className="col-12">
              <div className="alert alert-info">
                {searchTerm ? "No matching job requests found" : "No job requests available"}
              </div>
            </div>
          ) : (
            filteredRequests.map(job => (
              <div key={job.jobRequestId} className="col-md-6 col-lg-4 mb-4">
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title mb-0">Request #{job.jobRequestId}</h5>
                      {getStatusBadge(job.status)}
                    </div>
                    
                    <p className="card-text mb-2"><strong>Description:</strong> {job.description}</p>
                    
                    <div className="mb-2">
                      <strong>Service:</strong> {job.serviceType?.name || 'N/A'}
                    </div>
                    
                    <div className="mb-2">
                      <strong>Vehicle:</strong> {job.vehicle ? `${job.vehicle.make} ${job.vehicle.model}` : 'N/A'}
                    </div>
                    
                    <div className="mb-2">
                      <strong>Business:</strong> {job.business?.name || 'N/A'}
                    </div>
                    
                    {job.status === 'Rejected' && job.rejectReason && (
                      <div className="alert alert-danger p-2 mb-2">
                        <strong>Rejection Reason:</strong> {job.rejectReason}
                      </div>
                    )}
                    
                    <Link 
                      to={`/jobrequest/${job.jobRequestId}`} 
                      className="btn btn-sm btn-outline-primary mt-2 w-100"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </CustomerLayout>
  );
};