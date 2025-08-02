import React from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import './Wallet.css'; // Basic styling
import { Link } from "react-router-dom";
import {useState,useEffect} from 'react';

export const Wallet = () => {


  
  return (
    <CustomerLayout>
      

    



      <div className="wallet-container">
       
        <div className="wallet-header">
          <h1>Wallet</h1>
          <Link to="/add-credits" className="btn btn-primary">
            <i className="bi bi-plus-circle"></i> Add Credits
          </Link>
        </div>

       
        <div className="balance-card">
          <h2>Current Balance</h2>
          <p className="balance-amount">R10000</p>
        </div>

        <div className=" table-container">
          <h3>Recent Transactions</h3>
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
      </div>
    </CustomerLayout>
  );
};