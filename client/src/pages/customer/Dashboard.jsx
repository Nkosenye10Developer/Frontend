import React from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';



export const Dashboard = () => {
  return (
    <CustomerLayout>
      <div className="page-content">
      <h1>Dashboard</h1>
      <div className="content">
        <p>Welcome to your dashboard!</p>
      </div>
    </div>
    </CustomerLayout>
  );
};