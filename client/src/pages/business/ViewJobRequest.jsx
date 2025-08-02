import React, { useState, useEffect } from "react";
import { BusinessLayout } from "../../components/layout/BusinessLayout";
import { 
  FaCar, 
  FaCalendarAlt, 
  FaUser, 
  FaTools, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaCheck,
  FaTimes,
  FaClock,
  FaSearch,
  FaFilter
} from 'react-icons/fa';
import { getAllBusinessJobRequest } from "../../api/jobRequestApi";
import { toast } from "react-hot-toast";

export const ViewJobRequest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [rejectReason, setRejectReason] = useState("");
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [jobRequests, setJobRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobRequests = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const businessData = localStorage.getItem('businessObj');
        if (!businessData) {
          throw new Error("Business data not found in local storage");
        }

        const businessDataParsed = JSON.parse(businessData);
        const businessId = businessDataParsed?.businessId;

        if (!businessId) {
          throw new Error("Business ID not found in business data");
        }

        const response = await getAllBusinessJobRequest(businessId);
        
        // Debug the response
        console.log("API Response:", response);
        
        if (!response) {
          throw new Error("No response received from server");
        }

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

  const formatCustomerName = (customer) => {
    if (!customer) return "Unknown Customer";
    
    // Check if user data is available
    if (customer.user) {
      const name = customer.user.name || "";
      const surname = customer.user.surname || "";
      const fullName = `${name} ${surname}`.trim();
      return fullName || customer.user.email || `Customer ${customer.customerId}`;
    }
    
    // Fallback to customer ID if user data not available
    return `Customer ${customer.customerId || customer.userId || "Unknown"}`;
  };

  const getCustomerEmail = (customer) => {
    if (!customer?.user?.email) return null;
    return customer.user.email;
  };

  const filteredRequests = jobRequests.filter(request => {
    const customerName = formatCustomerName(request.customer);
    const customerEmail = getCustomerEmail(request.customer) || "";
    const vehicleInfo = request.vehicle ? `${request.vehicle.make} ${request.vehicle.model}` : "Unknown Vehicle";
    const serviceName = request.serviceType?.name || "Unknown Service";
    const location = request.business?.address || "Unknown Location";

    const searchTermLower = searchTerm.toLowerCase();
    const matchesSearch = !searchTerm ||
      customerName.toLowerCase().includes(searchTermLower) ||
      customerEmail.toLowerCase().includes(searchTermLower) ||
      vehicleInfo.toLowerCase().includes(searchTermLower) ||
      serviceName.toLowerCase().includes(searchTermLower) ||
      location.toLowerCase().includes(searchTermLower);

    const matchesStatus =
      filterStatus === "all" || 
      request.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case "confirmed":
        return <span className="badge bg-success"><FaCheck /> Confirmed</span>;
      case "pending":
      case "unprocessed":
        return <span className="badge bg-warning text-dark"><FaClock /> Pending</span>;
      case "completed":
        return <span className="badge bg-primary"><FaCheck /> Completed</span>;
      case "rejected":
      case "cancelled":
        return <span className="badge bg-danger"><FaTimes /> Cancelled</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  const handleAccept = (id) => {
    alert(`Accepted request ID: ${id}`);
    // Perform accept logic here
  };

  const handleReject = (id) => {
    setSelectedRequestId(id);
    setShowModal(true);
  };

  const submitRejection = () => {
    alert(`Rejected request ID: ${selectedRequestId} with reason: "${rejectReason}"`);
    // Perform rejection logic here
    setShowModal(false);
    setRejectReason("");
    setSelectedRequestId(null);
  };

  const formatVehicleInfo = (vehicle) => {
    if (!vehicle) return "Unknown Vehicle";
    return `${vehicle.make} ${vehicle.model}`;
  };

  if (loading) {
    return (
      <BusinessLayout>
        <div className="page-content text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </BusinessLayout>
    );
  }

  if (error) {
    return (
      <BusinessLayout>
        <div className="page-content">
          <div className="alert alert-danger">
            <strong>Error:</strong> {error}
            <div className="mt-2">
              <button 
                className="btn btn-warning btn-sm"
                onClick={() => window.location.reload()}
              >
                <i className="bi bi-arrow-clockwise"></i> Try Again
              </button>
            </div>
          </div>
        </div>
      </BusinessLayout>
    );
  }

  return (
    <BusinessLayout>
      <div className="page-content">
        <h1 className="mb-4">Job Requests</h1>

        {/* Search and Filter Bar */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text"><FaSearch /></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search by customer name, email, vehicle, service or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-text"><FaFilter /></span>
              <select
                className="form-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="unprocessed">Unprocessed</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="rejected">Rejected</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Requests List */}
        <div className="row">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <div key={request.jobRequestId} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{request.serviceType?.name || "Unknown Service"}</h5>
                    {getStatusBadge(request.status)}
                  </div>
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-6">
                        <p className="mb-1"><FaUser /> <strong>Customer:</strong></p>
                        <p className="mb-0">{formatCustomerName(request.customer)}</p>
                        {getCustomerEmail(request.customer) && (
                          <small className="text-muted d-block">
                            <FaEnvelope className="me-1" />
                            {getCustomerEmail(request.customer)}
                          </small>
                        )}
                        {request.customer?.user?.cellNumber && (
                          <small className="text-muted d-block">
                            <FaPhone className="me-1" />
                            {request.customer.user.cellNumber}
                          </small>
                        )}
                      </div>
                      <div className="col-6">
                        <p className="mb-1"><FaCar /> <strong>Vehicle:</strong></p>
                        <p className="mb-0">{formatVehicleInfo(request.vehicle)}</p>
                        {request.vehicle?.registrationNumber && (
                          <small className="text-muted d-block">
                            Reg: {request.vehicle.registrationNumber}
                          </small>
                        )}
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="mb-1"><FaTools /> <strong>Service Details:</strong></p>
                      <p>{request.serviceType?.name || "Unknown Service"}</p>
                    </div>

                    <div className="mb-3">
                      <p className="mb-1"><strong>Description:</strong></p>
                      <p className="text-muted">{request.description || "No description provided"}</p>
                    </div>

                    {request.rejectReason && (
                      <div className="alert alert-danger p-2 mb-3">
                        <strong>Rejection Reason:</strong> {request.rejectReason}
                      </div>
                    )}
                  </div>

                  {(request.status.toLowerCase() === "pending" || 
                    request.status.toLowerCase() === "unprocessed") && (
                    <div className="card-footer bg-light d-flex justify-content-end">
                      <button
                        className="btn btn-success btn-sm me-2"
                        onClick={() => handleAccept(request.jobRequestId)}
                      >
                        Accept Request
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleReject(request.jobRequestId)}
                      >
                        Reject Request
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info">
                {searchTerm ? "No matching job requests found" : "No job requests available"}
              </div>
            </div>
          )}
        </div>

        {/* Rejection Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Rejection Reason</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Please provide a reason for rejecting this job request..."
                    value={rejectReason}
                    onChange={(e) => setRejectReason(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button 
                    className="btn btn-danger" 
                    onClick={submitRejection} 
                    disabled={!rejectReason.trim()}
                  >
                    Submit Rejection
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </BusinessLayout>
  );
};