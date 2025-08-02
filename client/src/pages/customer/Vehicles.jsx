import React, { useEffect, useState } from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link, useNavigate } from 'react-router-dom';
import { deleteVehicles, getAllVehicles } from "../../api/vehiclesApi";
import { toast } from "react-hot-toast";
import sweetalert from 'sweetalert2';

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchVehicleData = async () => {
    try {
      const customerData = JSON.parse(localStorage.getItem('customerObj'));
      const customerId = customerData?.customerId;

      if (!customerId) throw new Error("Customer ID not found in local storage.");

      const response = await getAllVehicles(customerId);

      // ✅ Extract $values if it exists (typical in .NET responses)
      const vehiclesArray = response?.$values ?? [];

      console.log("Fetched Vehicles:", vehiclesArray);

      setVehicles(vehiclesArray);
      setFilteredVehicles(vehiclesArray);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching vehicles:", err);
      toast.error("Failed to load vehicle data");
      setVehicles([]);
      setFilteredVehicles([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicleData();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = vehicles.filter((v) =>
      (v.model?.toLowerCase().includes(value) || "") ||
      (v.registrationNumber?.toLowerCase().includes(value) || "") ||
      (v.claimNumber?.toLowerCase().includes(value) || "") ||
      (v.make?.toLowerCase().includes(value) || "")
    );

    setFilteredVehicles(filtered);
  };

  const handleDelete = async (vehicleId) => {
    const result = await sweetalert.fire({
      title: 'Are you sure?',
      text: `This action cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    });

    if (!result.isConfirmed) return;

    try {
      await deleteVehicles(vehicleId);

      await sweetalert.fire({
        icon: 'success',
        title: 'Deleted!',
        text: 'Vehicle has been deleted successfully.',
        timer: 1500,
        showConfirmButton: false
      });

      setTimeout(() => {
        fetchVehicleData();
      }, 1600);
    } catch (err) {
      console.error(err);
      await sweetalert.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to delete vehicle. Please try again later.',
      });
    }
  };

  return (
    <CustomerLayout>
      <div className="container-fluid w-100">
        <h1 className="text-black">Vehicles</h1>

        <div className="row mb-3">
          <div className="col-md-6 mb-2 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search Vehicles..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <Link to="/add-vehicles" className="btn btn-primary p-3 text-nowrap">
              <i className="bi bi-plus-circle"></i> Add Vehicle
            </Link>
          </div>
        </div>

        <table className="table table-hover align-middle">
          <thead className="table-light">
            <tr>
              <th className="text-center">Model</th>
              <th className="text-center">Registration</th>
              <th className="text-center">Mileage</th>
              <th className="text-center">Claim Number</th>
              <th className="text-center">Make</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center text-muted">Loading...</td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center text-danger">{error}</td>
              </tr>
            ) : filteredVehicles.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  {searchTerm ? "No matching vehicles found" : "No vehicles available"}
                </td>
              </tr>
            ) : (
              filteredVehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td className="text-center">{vehicle.model || "-"}</td>
                  <td className="text-center">{vehicle.registrationNumber || "-"}</td>
                  <td className="text-center">{vehicle.mileage || "-"}</td>
                  <td className="text-center">{vehicle.claimNumber || "-"}</td>
                  <td className="text-center">{vehicle.make || "-"}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-primary me-2"
                      onClick={() => navigate(`/edit-vehicle/${vehicle.vehicleId}`)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      onClick={() => handleDelete(vehicle.vehicleId)}
                      className="btn btn-danger"
                    >
                      <i className="bi bi-archive-fill"></i>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </CustomerLayout>
  );
};
