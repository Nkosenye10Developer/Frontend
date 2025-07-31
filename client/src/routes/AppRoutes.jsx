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
import { ViewJobRequest } from '../pages/business/ViewJobRequest';
import { ViewCustomer } from '../pages/admin/ViewCustomer';
import { BusinessApplication } from '../pages/admin/BusinessApplication';
import { AddCredits } from '../pages/customer/AddCredits';
import { Communications } from '../pages/admin/Communications';
import { ManageBusinesses } from '../pages/admin/ManageBusinesses';
import { Stats } from '../pages/admin/Stats';
import { ManageReports } from '../pages/admin/ManageReports';

import { ManageJobCards } from '../pages/business/ManageJobCards';
import { InventoryManagement } from '../pages/business/InventoryManagement';
import { Communication } from '../pages/business/Communication';
import { ManageProfile } from '../pages/business/ManageProfile';
import { Customer } from '../pages/business/Customer';
import Signup from '../pages/Signup';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Customer Routes */}
      <Route path="/customer" element={<CustomerLayout />} />
     <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/add-vehicles" element={<AddVehicles />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/add-credits" element={<AddCredits />} />
      <Route path="/jobrequest" element={<JobRequest />} />
      <Route path="/add-jobrequest" element={<AddJobRequest />} />
      <Route path="/history" element={<ServiceHistory />} />
      <Route path="/referrals" element={<Referrals />} />

     {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />} />
      <Route path="/viewcustomer" element={<ViewCustomer/>} />
      <Route path="/businessapplication" element={<BusinessApplication/>} />
      <Route path="/communications" element={<Communications/>} />
      <Route path="/managebusinesses" element={<ManageBusinesses/>} />
      <Route path="/stats" element={<Stats/>} />
      <Route path="/managereports" element={<ManageReports/>} />

     {/* Business Routes */}
      <Route path="/business" element={<BusinessLayout />} />
      <Route path="/viewjobrequest" element={<ViewJobRequest />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/managejobcards" element={< ManageJobCards/>} />
      <Route path="/inventorymanagement" element={<InventoryManagement />} />
      <Route path="/communication" element={<Communication />} />
      <Route path="/manageprofile" element={<ManageProfile />} />
      <Route path="/customer" element={<Customer />} />
    </Routes>

  );
};