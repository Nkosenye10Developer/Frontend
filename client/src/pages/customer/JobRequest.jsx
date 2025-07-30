import React from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import './Table.css';
import { Link } from 'react-router-dom';


export const JobRequest = () => {
  return (
  <CustomerLayout>
      <section className="home p-2">
      <div className="row">
        <div className="mb-5">
          <h1>Job Request</h1>
        </div>
        <div className="mt-5 d-flex justify-content-between">
          <div className="search-box d-flex justify-content-start me-2 w-50">
            <i className='bx bx-search'></i>
            <input type="text" placeholder="Search for anything here.." />
          </div>
          <div>
          <Link to="/add-jobrequest" className="btn btn-primary w-100 h-100 p-2 text-nowrap ">
       <i className="bi bi-plus-circle"></i> Add Vehicles
   </Link>
          </div>
        </div>
        <div className="table-container">
          <table className="authors-table">
            <thead>
              <tr>
                <th>Active Ingredient</th>
                <th>Medication Name</th>
                <th className="text-center">Uses</th>
                <th>
                  <div className="d-flex justify-content-between align-items-center">
                    <span>Actions</span>
                    <button className="btn btn-sm btn-success ms-2">
                      <i className="uil uil-file-export"></i> Export
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="author-info">
                    <p className="author-name">1</p>
                  </div>
                </td>
                <td>
                  <div className="function-info">
                    <p className="function-role">Panado</p>
                  </div>
                </td>
                <td>
                  <div className="text-center">
                    <p>Mild to moderate pain (headache, toothache, muscle pain, menstrual cramps).</p>
                  </div>
                </td>
                <td>
                  <button className="btn btn-primary">
                  <i class='bx  bx-edit'  ></i> 
                  </button>
                  <button className="btn btn-danger">
                  <i class='bx  bx-trash'  ></i> 
                  </button>
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