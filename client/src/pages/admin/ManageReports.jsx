import React, { useState, useEffect } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";

export const ManageReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30");
  const [reportData, setReportData] = useState({
    systemUsage: {
      totalUsers: 1247,
      activeUsers: 892,
      newRegistrations: 156,
      totalSessions: 3456,
      averageSessionDuration: "8m 34s",
      bounceRate: "32.4%"
    },
    financial: {
      totalRevenue: 125400,
      monthlyRevenue: 28750,
      avgTransactionValue: 156.80,
      totalTransactions: 847,
      refunds: 12,
      pendingPayments: 23400
    },
    engagement: {
      pageViews: 15647,
      uniqueVisitors: 4521,
      returningUsers: "68.2%",
      topPages: [
        { page: "/dashboard", views: 3456 },
        { page: "/bookings", views: 2891 },
        { page: "/profile", views: 1654 }
      ],
      deviceBreakdown: {
        mobile: 62,
        desktop: 28,
        tablet: 10
      }
    }
  });

  const [loading, setLoading] = useState(false);

  // Simulate data fetching
  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [selectedPeriod]);

  const handleExportReport = (reportType) => {
    alert(`Exporting ${reportType} report for the last ${selectedPeriod} days...`);
  };

  const handleRefreshData = () => {
    setLoading(true);
    // Simulate data refresh
    setTimeout(() => {
      setLoading(false);
      alert("Data refreshed successfully!");
    }, 1500);
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="d-flex justify-content-center align-items-center" style={{ height: "60vh" }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="container-fluid">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="mb-2">Manage Reports</h1>
                <p className="text-muted">System usage, financial summaries, and engagement metrics</p>
              </div>
              <div className="d-flex gap-2">
                <select 
                  className="form-select" 
                  value={selectedPeriod}
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  style={{ width: "150px" }}
                >
                  <option value="7">Last 7 days</option>
                  <option value="30">Last 30 days</option>
                  <option value="90">Last 90 days</option>
                  <option value="365">Last year</option>
                </select>
                <button className="btn btn-outline-primary" onClick={handleRefreshData}>
                  <i className="bi bi-arrow-clockwise"></i> Refresh
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* System Usage Metrics */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">System Usage Analytics</h5>
                <button 
                  className="btn btn-sm btn-outline-success"
                  onClick={() => handleExportReport('System Usage')}
                >
                  <i className="bi bi-download"></i> Export
                </button>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-primary mb-1">{reportData.systemUsage.totalUsers.toLocaleString()}</h3>
                      <small className="text-muted">Total Users</small>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-success mb-1">{reportData.systemUsage.activeUsers.toLocaleString()}</h3>
                      <small className="text-muted">Active Users</small>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-info mb-1">{reportData.systemUsage.newRegistrations}</h3>
                      <small className="text-muted">New Registrations</small>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-warning mb-1">{reportData.systemUsage.totalSessions.toLocaleString()}</h3>
                      <small className="text-muted">Total Sessions</small>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-secondary mb-1">{reportData.systemUsage.averageSessionDuration}</h3>
                      <small className="text-muted">Avg Session</small>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="text-center p-3 bg-light rounded">
                      <h3 className="text-danger mb-1">{reportData.systemUsage.bounceRate}</h3>
                      <small className="text-muted">Bounce Rate</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Summary */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="card h-100">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Financial Summary</h5>
                <button 
                  className="btn btn-sm btn-outline-success"
                  onClick={() => handleExportReport('Financial')}
                >
                  <i className="bi bi-download"></i> Export
                </button>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="border-end pe-3">
                      <h4 className="text-success">R{reportData.financial.totalRevenue.toLocaleString()}</h4>
                      <p className="text-muted mb-0">Total Revenue</p>
                      <small className="text-success">↑ 12.5% from last period</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="border-end pe-3">
                      <h4 className="text-primary">R{reportData.financial.monthlyRevenue.toLocaleString()}</h4>
                      <p className="text-muted mb-0">This Month</p>
                      <small className="text-success">↑ 8.3% from last month</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div>
                      <h4 className="text-info">R{reportData.financial.avgTransactionValue}</h4>
                      <p className="text-muted mb-0">Avg Transaction</p>
                      <small className="text-warning">↓ 2.1% from last period</small>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-4">
                    <p><strong>Total Transactions:</strong> {reportData.financial.totalTransactions}</p>
                  </div>
                  <div className="col-md-4">
                    <p><strong>Refunds:</strong> {reportData.financial.refunds}</p>
                  </div>
                  <div className="col-md-4">
                    <p><strong>Pending Payments:</strong> R{reportData.financial.pendingPayments.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-header">
                <h5 className="mb-0">Device Breakdown</h5>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Mobile</span>
                    <span>{reportData.engagement.deviceBreakdown.mobile}%</span>
                  </div>
                  <div className="progress mb-2">
                    <div 
                      className="progress-bar bg-primary" 
                      style={{ width: `${reportData.engagement.deviceBreakdown.mobile}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Desktop</span>
                    <span>{reportData.engagement.deviceBreakdown.desktop}%</span>
                  </div>
                  <div className="progress mb-2">
                    <div 
                      className="progress-bar bg-success" 
                      style={{ width: `${reportData.engagement.deviceBreakdown.desktop}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Tablet</span>
                    <span>{reportData.engagement.deviceBreakdown.tablet}%</span>
                  </div>
                  <div className="progress">
                    <div 
                      className="progress-bar bg-warning" 
                      style={{ width: `${reportData.engagement.deviceBreakdown.tablet}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Metrics */}
        <div className="row mb-4">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Engagement Metrics</h5>
                <button 
                  className="btn btn-sm btn-outline-success"
                  onClick={() => handleExportReport('Engagement')}
                >
                  <i className="bi bi-download"></i> Export
                </button>
              </div>
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-md-3">
                    <div className="text-center">
                      <h4 className="text-primary">{reportData.engagement.pageViews.toLocaleString()}</h4>
                      <p className="text-muted mb-0">Page Views</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <h4 className="text-success">{reportData.engagement.uniqueVisitors.toLocaleString()}</h4>
                      <p className="text-muted mb-0">Unique Visitors</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <h4 className="text-info">{reportData.engagement.returningUsers}</h4>
                      <p className="text-muted mb-0">Returning Users</p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <h4 className="text-warning">3.2</h4>
                      <p className="text-muted mb-0">Pages/Session</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Top Pages</h5>
              </div>
              <div className="card-body">
                {reportData.engagement.topPages.map((page, index) => (
                  <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                    <span className="text-truncate">{page.page}</span>
                    <span className="badge bg-primary">{page.views.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Google Analytics Integration */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">Google Analytics Integration</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="alert alert-info">
                      <h6><i className="bi bi-info-circle"></i> Analytics Status</h6>
                      <p className="mb-2">Google Analytics is connected and tracking data.</p>
                      <small>Property ID: GA4-XXXXXXXXX</small>
                    </div>
                    <button className="btn btn-primary me-2">
                      <i className="bi bi-graph-up"></i> View Full Analytics
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="bi bi-gear"></i> Configure
                    </button>
                  </div>
                  <div className="col-md-6">
                    <h6>Quick Actions</h6>
                    <div className="list-group">
                      <button className="list-group-item list-group-item-action">
                        <i className="bi bi-download me-2"></i>Export Analytics Data
                      </button>
                      <button className="list-group-item list-group-item-action">
                        <i className="bi bi-calendar3 me-2"></i>Schedule Reports
                      </button>
                      <button className="list-group-item list-group-item-action">
                        <i className="bi bi-bell me-2"></i>Set Up Alerts
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Export All Reports */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body text-center">
                <h5>Generate Comprehensive Report</h5>
                <p className="text-muted">Export all metrics and analytics in one comprehensive report</p>
                <button 
                  className="btn btn-success btn-lg"
                  onClick={() => handleExportReport('Comprehensive')}
                >
                  <i className="bi bi-file-earmark-spreadsheet"></i> Generate Full Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};