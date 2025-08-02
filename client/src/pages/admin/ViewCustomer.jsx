import React, { useState } from "react";
import { AdminLayout } from "../../components/layout/AdminLayout";
import { Link } from "react-router-dom";

export const ViewCustomer = () => {
  

  return (
    <AdminLayout>
       
        

   <div className="container-fluid w-100">
      <h1 className="text-black">View Customer</h1>
 

      


<div className="row mb-3">
 
  <div className="col-md-6 mb-2 mb-md-0">
    <input 
      type="text" 
      className="form-control" 
      placeholder="Search View Customer..." 
    />
  </div>

  
 
</div>
 <table className="table table-hover align-middle ">
        <thead className="table-light">
          <tr >
            <th className="text-center">Name & Surname</th>
            <th className="text-center"></th>
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
    </AdminLayout>
  );
};