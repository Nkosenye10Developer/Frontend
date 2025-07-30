import React, { useState } from 'react';
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { useNavigate } from 'react-router-dom';
import './AddCredits.css'; // We'll create this CSS file

export const AddCredits = () => {
  const [amount, setAmount] = useState(100);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // PayFast integration
  const handlePayment = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // In a real implementation, you would:
    // 1. Create an order on your backend
    // 2. Get a payment ID from PayFast
    // 3. Redirect to PayFast payment page
    
    // For demo purposes, we'll simulate a successful payment
    setTimeout(() => {
      setLoading(false);
      navigate('/wallet?payment=success');
    }, 2000);
  };

  return (
    <CustomerLayout>
      <div className="add-credits-container w-100">
        <div className="add-credits-card w-100">
          <h2 className="add-credits-title">Add Credits to Wallet</h2>
          
          <form onSubmit={handlePayment} className="payment-form">
            <div className="form-group">
              <label className="form-label">Amount (ZAR)</label>
              <select
                className="form-select"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                required
              >
                <option value="100">R100</option>
                <option value="200">R200</option>
                <option value="500">R500</option>
                <option value="1000">R1000</option>
                <option value="2000">R2000</option>
              </select>
            </div>

            <div className="payment-methods">
              <h4>Payment Method</h4>
              <div className="payfast-option">
                <input 
                  type="radio" 
                  id="payfast" 
                  name="paymentMethod" 
                  value="payfast" 
                  defaultChecked 
                />
                <label htmlFor="payfast">
                  <img 
                    src="https://www.payfast.co.za/images/logo/PayFast_Logo_Blue.png" 
                    alt="PayFast" 
                    className="payfast-logo"
                  />
                </label>
              </div>
            </div>

            <div className="payment-summary">
              <h4>Payment Summary</h4>
              <div className="summary-row">
                <span>Amount:</span>
                <span>R{amount.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Fee:</span>
                <span>R0.00</span>
              </div>
              <div className="summary-row total">
                <span>Total:</span>
                <span>R{amount.toFixed(2)}</span>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-100 mt-3"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Pay Now'}
            </button>
          </form>
        </div>
      </div>
    </CustomerLayout>
  );
};