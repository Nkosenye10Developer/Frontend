import React, { useState } from "react";
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

export const ViewJobRequest = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Dummy job requests with South African locations
  const jobRequests = [
    {
      id: 1,
      customer: "Thabo Mbeki",
      vehicle: "Toyota Hilux 2021",
      serviceType: "Full Service",
      date: "2023-11-15",
      time: "09:00",
      status: "confirmed",
      location: "Sandton, Johannesburg",
      address: "12 Rivonia Road, Sandton",
      phone: "+27 11 123 4567",
      email: "thabo.mbeki@example.com",
      notes: "Request for synthetic oil and cabin filter replacement"
    },
    {
      id: 2,
      customer: "Nomsa Khumalo",
      vehicle: "VW Polo Vivo 2019",
      serviceType: "Brake Pad Replacement",
      date: "2023-11-16",
      time: "13:30",
      status: "pending",
      location: "Durban Central",
      address: "45 Victoria Embankment, Durban",
      phone: "+27 31 234 5678",
      email: "nomsa.k@example.com",
      notes: "Hearing squeaking noises when braking"
    },
    {
      id: 3,
      customer: "Pieter van der Merwe",
      vehicle: "BMW X5 2020",
      serviceType: "Diagnostic Check",
      date: "2023-11-17",
      time: "10:45",
      status: "completed",
      location: "Century City, Cape Town",
      address: "Shop 23, Canal Walk, Century City",
      phone: "+27 21 345 6789",
      email: "pieter.vdm@example.com",
      notes: "Engine warning light is on"
    },
    {
      id: 4,
      customer: "Lerato Molefe",
      vehicle: "Mercedes-Benz C200 2018",
      serviceType: "Tire Replacement",
      date: "2023-11-18",
      time: "11:15",
      status: "cancelled",
      location: "Menlyn, Pretoria",
      address: "197 Atterbury Road, Menlyn",
      phone: "+27 12 456 7890",
      email: "lerato.m@example.com",
      notes: "Need 4 new Continental tires"
    }
  ];

  // Filter job requests based on search and status filter
  const filteredRequests = jobRequests.filter(request => {
    const matchesSearch = 
      request.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.vehicle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = 
      filterStatus === "all" || 
      request.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch(status) {
      case "confirmed":
        return <span className="badge bg-success"><FaCheck /> Confirmed</span>;
      case "pending":
        return <span className="badge bg-warning text-dark"><FaClock /> Pending</span>;
      case "completed":
        return <span className="badge bg-primary"><FaCheck /> Completed</span>;
      case "cancelled":
        return <span className="badge bg-danger"><FaTimes /> Cancelled</span>;
      default:
        return <span className="badge bg-secondary">{status}</span>;
    }
  };

  return (
    <BusinessLayout>
      <div className="page-content">
        <h1 className="mb-4">Job Requests</h1>
        
        {/* Search and Filter Bar */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text">
                <FaSearch />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search by customer, vehicle, service or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <span className="input-group-text">
                <FaFilter />
              </span>
              <select
                className="form-select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Requests List */}
        <div className="row">
          {filteredRequests.length > 0 ? (
            filteredRequests.map((request) => (
              <div key={request.id} className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{request.serviceType}</h5>
                    {getStatusBadge(request.status)}
                  </div>
                  <div className="card-body">
                    <div className="row mb-3">
                      <div className="col-6">
                        <p className="mb-1"><FaUser /> <strong>Customer:</strong></p>
                        <p>{request.customer}</p>
                      </div>
                      <div className="col-6">
                        <p className="mb-1"><FaCar /> <strong>Vehicle:</strong></p>
                        <p>{request.vehicle}</p>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-6">
                        <p className="mb-1"><FaCalendarAlt /> <strong>Date & Time:</strong></p>
                        <p>{request.date} at {request.time}</p>
                      </div>
                      <div className="col-6">
                        <p className="mb-1"><FaMapMarkerAlt /> <strong>Location:</strong></p>
                        <p>{request.location}</p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="mb-1"><FaTools /> <strong>Service Details:</strong></p>
                      <p>{request.serviceType}</p>
                    </div>

                    <div className="mb-3">
                      <p className="mb-1"><strong>Customer Notes:</strong></p>
                      <p className="text-muted">{request.notes}</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <a href={`tel:${request.phone}`} className="btn btn-sm btn-outline-primary">
                        <FaPhone /> {request.phone}
                      </a>
                      <a href={`mailto:${request.email}`} className="btn btn-sm btn-outline-secondary">
                        <FaEnvelope /> Email
                      </a>
                    </div>
                  </div>
                  <div className="card-footer bg-light">
                    <div className="d-flex justify-content-end">
                      <button className="btn btn-sm btn-primary me-2">
                        View Details
                      </button>
                      {request.status === "pending" && (
                        <button className="btn btn-sm btn-success">
                          Confirm Booking
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info">
                No job requests found matching your criteria.
              </div>
            </div>
          )}
        </div>
      </div>
    </BusinessLayout>
  );
};