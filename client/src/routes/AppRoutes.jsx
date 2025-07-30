import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import Login from '../pages/Login';
import { CustomerLayout } from '../components/layout/CustomerLayout';
import { AdminLayout } from '../components/layout/AdminLayout';
import { BusinessLayout } from '../components/layout/BusinessLayout';
import { Dashboard } from '../pages/customer/Dashboard';
import { Vehicles } from '../pages/customer/Vehicles';
import { Referrals } from '../pages/customer/Referrals';
import { ServiceHistory } from '../pages/customer/ServiceHistory';
import { Wallet } from '../pages/customer/Wallet';
import { AddVehicles } from '../pages/customer/AddVehicles';
import { JobRequest } from '../pages/customer/JobRequest';
import { AddJobRequest } from '../pages/customer/AddJobRequest';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Customer Routes */}
      <Route path="/customer" element={<CustomerLayout />} />
     <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/add-vehicles" element={<AddVehicles />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/jobrequest" element={<JobRequest />} />
      <Route path="/add-jobrequest" element={<AddJobRequest />} />
      <Route path="/history" element={<ServiceHistory />} />
      <Route path="/referrals" element={<Referrals />} />

 {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />} />

        {/* Business Routes */}
      <Route path="/business" element={<BusinessLayout />} />
    </Routes>
  );
};