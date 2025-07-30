import React from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link, useNavigate } from 'react-router-dom';
import './Vehicles.css'; // We'll add this CSS file

export const Vehicles = () => {
  return (
    <CustomerLayout>
      <section className="vehicles-section">
        <div className="vehicles-container">
          <div className="vehicles-header">
            <h1 className="vehicles-title">Vehicles</h1>
          </div>
          
          <div className="vehicles-controls">
            <div className="search-box">
              <i className='bx bx-search search-icon'></i>
              <input 
                type="text" 
                placeholder="Search for anything here.." 
                className="search-input"
              />
            </div>
            <div className="add-vehicle-btn-container">
              <Link to="/add-vehicles" className="btn btn-primary add-vehicle-btn">
                <i className="bi bi-plus-circle"></i> Add Vehicles
              </Link>
            </div>
          </div>
          
          <div className="vehicles-table-container">
            <table className="vehicles-table">
              <thead className="table-header">
                <tr>
                  <th className="table-heading">Active Ingredient</th>
                  <th className="table-heading">Medication Name</th>
                  <th className="table-heading text-center">Uses</th>
                  <th className="table-heading">
                    <div className="actions-header">
                      <span>Actions</span>
                      <button className="btn btn-sm export-btn">
                        <i className="uil uil-file-export"></i> Export
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <td className="table-data">
                    <div className="data-content">
                      <p className="data-text">1</p>
                    </div>
                  </td>
                  <td className="table-data">
                    <div className="data-content">
                      <p className="data-text">Panado</p>
                    </div>
                  </td>
                  <td className="table-data">
                    <div className="data-content text-center">
                      <p className="data-text">Mild to moderate pain (headache, toothache, muscle pain, menstrual cramps).</p>
                    </div>
                  </td>
                  <td className="table-data">
                    <div className="action-buttons">
                      <button className="btn edit-btn">
                        <i className='bx bx-edit'></i> 
                      </button>
                      <button className="btn delete-btn">
                        <i className='bx bx-trash'></i> 
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </CustomerLayout>
  );
};