import React from "react";
import { Link } from "react-router-dom";
import { BusinessLayout } from "../../components/layout/BusinessLayout";



export const ManageJobCards = () => {
  return (
    <BusinessLayout>
         

         <div className="container-fluid w-100">
      <h1 className="text-black">Job Cards</h1>
 

      


<div className="row mb-3">
 
  <div className="col-md-6 mb-2 mb-md-0">
    <input 
      type="text" 
      className="form-control" 
      placeholder="Search Job Card..."
       // Add search functionality
    />
  </div>

  
  <div className="col-md-6 d-flex justify-content-end">
    <Link 
      to="/add-jobcards" 
      className="btn btn-primary p-3 text-nowrap"
    >
      <i className="bi bi-plus-circle"></i> Add Vehicles
    </Link>
  </div>
</div>
 <table className="table table-hover align-middle ">
        <thead className="table-light">
          <tr >
            <th className="text-center">Model</th>
            <th className="text-center">Registration</th>
            <th className="text-center">Mileage</th>
            <th className="text-center">Claim Number</th>
            <th className="text-center">Make</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
        
         <tr>
            <td  className="text-center text-muted">
              No applications found.
            </td>
            <td  className="text-center text-muted">
              No applications found.
            </td>
            <td className="text-center text-muted">
              No applications found.
            </td>
            <td  className="text-center text-muted">
              No applications found.
            </td>

            <td  className="text-center text-muted">
              No applications found.
            </td>


            <td>
            <button class="btn btn-primary btns1 me-2">  <i className="bi bi-pencil-square"></i></button>
            <button class="btn btn-danger"> <i className="bi bi-archive-fill"></i></button>
          </td>
            
            
        </tr>
       
        </tbody>
      </table>
</div>
    </BusinessLayout>
  );
};