import React, { useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import "./BusinessApplication.css"; // Optional custom CSS

export const BusinessApplication = () => {
  // Sample business application data
  const [applications, setApplications] = useState([
    {
      id: 1,
      businessName: "AutoFix Garage",
      ownerName: "John Smith",
      email: "john@autofix.com",
      phone: "078 123 2890",
      location: "South Africa, Cape Town",
      status: "pending",
      appliedDate: "2023-06-15"
    },
    {
      id: 2,
      businessName: "Quick Repairs",
      ownerName: "Sarah Grootboom",
      email: "sarah@quickrepairs.com",
      phone: "083 987 6543",
      location: "Gqeberha ,South Africa",
      status: "pending",
      appliedDate: "2023-06-18"
    },
    {
      id: 3,
      businessName: "Pro Auto Care",
      ownerName: "Philani Mthembu",
      email: "mike@proautocare.com",
      phone: "082 456 7890",
      location: "KwaDukuza ,South Africa",
      status: "approved",
      appliedDate: "2023-06-10"
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleApprove = (id) => {
    setApplications(applications.map(app => 
      app.id === id ? {...app, status: "approved"} : app
    ));
  };

  const handleReject = (id) => {
    setApplications(applications.map(app => 
      app.id === id ? {...app, status: "rejected"} : app
    ));
  };

  const handleViewDetails = (application) => {
    setSelectedApp(application);
    setShowModal(true);
  };

  const filteredApplications = applications.filter(app => 
    app.businessName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="container-fluid business-applications">
        <div className="row mb-4">
          <div className="col-12">
            <h1 className="mb-3">Business Applications</h1>
            <p className="text-muted">
              Review pending business sign-ups before granting access
            </p>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <div className="btn-group" role="group">
              <button className="btn btn-outline-primary">All</button>
              <button className="btn btn-outline-primary">Pending</button>
              <button className="btn btn-outline-primary">Approved</button>
              <button className="btn btn-outline-primary">Rejected</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Business Name</th>
                    <th>Owner</th>
                    <th>Location</th>
                    <th>Applied Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((application) => (
                    <tr key={application.id}>
                      <td>{application.businessName}</td>
                      <td>{application.ownerName}</td>
                      <td>{application.location}</td>
                      <td>{application.appliedDate}</td>
                      <td>
                        <span className={`badge ${
                          application.status === "approved" 
                            ? "bg-success" 
                            : application.status === "rejected" 
                              ? "bg-danger" 
                              : "bg-warning text-dark"
                        }`}>
                          {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                        </span>
                      </td>
                      <td>
                        <button 
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleViewDetails(application)}
                        >
                          <i className="bi bi-eye"></i> View
                        </button>
                        {application.status === "pending" && (
                          <>
                            <button 
                              className="btn btn-sm btn-success me-2"
                              onClick={() => handleApprove(application.id)}
                            >
                              <i className="bi bi-check"></i> Approve
                            </button>
                            <button 
                              className="btn btn-sm btn-danger"
                              onClick={() => handleReject(application.id)}
                            >
                              <i className="bi bi-x"></i> Reject
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Application Details Modal */}
        {selectedApp && (
          <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Application Details</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h6>Business Information</h6>
                      <ul className="list-group list-group-flush mb-3">
                        <li className="list-group-item">
                          <strong>Name:</strong> {selectedApp.businessName}
                        </li>
                        <li className="list-group-item">
                          <strong>Owner:</strong> {selectedApp.ownerName}
                        </li>
                        <li className="list-group-item">
                          <strong>Location:</strong> {selectedApp.location}
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h6>Contact Information</h6>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <strong>Email:</strong> {selectedApp.email}
                        </li>
                        <li className="list-group-item">
                          <strong>Phone:</strong> {selectedApp.phone}
                        </li>
                        <li className="list-group-item">
                          <strong>Applied On:</strong> {selectedApp.appliedDate}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12">
                      <h6>Documents</h6>
                      <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-file-earmark-text"></i> Business License
                        </button>
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-file-earmark-text"></i> Tax ID
                        </button>
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-file-earmark-text"></i> Owner ID
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  {selectedApp.status === "pending" && (
                    <>
                      <button 
                        className="btn btn-success"
                        onClick={() => {
                          handleApprove(selectedApp.id);
                          setShowModal(false);
                        }}
                      >
                        Approve Application
                      </button>
                      <button 
                        className="btn btn-danger"
                        onClick={() => {
                          handleReject(selectedApp.id);
                          setShowModal(false);
                        }}
                      >
                        Reject Application
                      </button>
                    </>
                  )}
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal backdrop */}
        {showModal && (
          <div 
            className="modal-backdrop fade show"
            onClick={() => setShowModal(false)}
          ></div>
        )}
      </div>
    </AdminLayout>
  );
};