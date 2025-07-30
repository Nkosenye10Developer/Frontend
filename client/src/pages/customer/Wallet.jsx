import React from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import './Wallet.css'; // Basic styling
import './Table.css'; // Table styling
import { Link } from "react-router-dom";

export const Wallet = () => {
  // Sample data - replace with your actual data
  const balance = 100.00;
  const transactions = [
    { id: 1, date: '2023-06-15', description: 'Job Card #293', amount: -50.00 },
    { id: 2, date: '2023-06-10', description: 'Job Card #2912', amount: -30.00 },
    { id: 3, date: '2023-05-28', description: 'Job Card', amount: -80.00 }
  ];

  return (
    <CustomerLayout>
      <div className="wallet-container">
        {/* Header with Add Credits button */}
        <div className="wallet-header">
          <h1>Wallet</h1>
          <Link to="/add-credits" className="add-credits-btn">
            <i className="bi bi-plus-circle"></i> Add Credits
          </Link>
        </div>

        {/* Balance Card */}
        <div className="balance-card">
          <h2>Current Balance</h2>
          <p className="balance-amount">${balance.toFixed(2)}</p>
        </div>

        {/* Transaction History */}
        <div className=" table-container">
          <h3>Recent Transactions</h3>
          {transactions.length > 0 ? (
            <table className=" authors-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((txn) => (
                  <tr key={txn.id}>
                    <td>{txn.date}</td>
                    <td>{txn.description}</td>
                    <td className={txn.amount > 0 ? 'credit' : 'debit'}>
                      {txn.amount > 0 ? '+' : ''}{txn.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No transactions yet</p>
          )}
        </div>
      </div>
    </CustomerLayout>
  );
};