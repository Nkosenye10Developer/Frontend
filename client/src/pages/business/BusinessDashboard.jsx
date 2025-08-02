import React from "react";

import { BusinessLayout } from "../../components/layout/BusinessLayout";



export const BusinessDashboard = () => {
  return (
    <BusinessLayout>
      <div className="page-content">
      <h1>Dashboard</h1>
      <div className="content">
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
    </BusinessLayout>
  );
};