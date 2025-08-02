import React from "react";
import { CustomerLayout } from "../../components/layout/CustomerLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export const JobCards = () => {
  const navigate = useNavigate();

  const dummyCards = [
    {
      id: "JC-002",
      jobRequested: "Engine Overhaul and Diagnostic Test",
      labourDetails:
        "Complete engine disassembly, inspection, cleaning, and replacement of worn-out parts. Includes tuning, diagnostics, and test run.",
      dateCreated: "2025-07-25",
      dateCompleted: null,
      inventoryItems: [
        { name: "Oil Filter", quantity: 1, unitPrice: 120 },
        { name: "Piston Rings", quantity: 1, unitPrice: 450 },
        { name: "Spark Plugs", quantity: 4, unitPrice: 80 },
        { name: "Engine Oil", quantity: 2, unitPrice: 300 }
      ]
    },
    
  ];

  const calculateTotal = (items) =>
    items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

  const handleAccept = (jobCardId) => {
    // Redirect to stages (you can adjust this path)
    navigate(`/jobcards/${jobCardId}/stages`);
  };

  return (
    <CustomerLayout>
      <div className="container-fluid py-4">
        <h1 className="text-black mb-4">Job Cards</h1>

        <div className="row">
          {dummyCards.map((card, index) => (
            <div className="col-md-12 mb-4" key={index}>
              <div className="card shadow-sm border-0 p-4">
                <div className="card-body">
                  <h4 className="text-primary mb-3">
                    Job Card ID: <span className="text-dark">{card.id}</span>
                  </h4>

                  <p className="mb-2">
                    <strong>Date Created:</strong> {card.dateCreated}
                  </p>

                  <p className="mb-2">
                    <strong>Date Completed:</strong>{" "}
                    {card.dateCompleted || "In Progress"}
                  </p>

                  <hr />

                  <h5 className="mb-3">Job Requested</h5>
                  <p>{card.jobRequested}</p>

                  <h5 className="mb-3">Labour Details</h5>
                  <p>{card.labourDetails}</p>

                  <h5 className="mt-4 mb-2">Inventory Used</h5>
                  <table className="table table-bordered">
                    <thead className="table-light">
                      <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Unit Price (R)</th>
                        <th>Subtotal (R)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {card.inventoryItems.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>{item.unitPrice}</td>
                          <td>{item.quantity * item.unitPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <p className="fw-bold fs-5 mt-3">
                    Total Cost: R{calculateTotal(card.inventoryItems)}
                  </p>

                  <div className="d-flex justify-content-end gap-2 mt-4">
                    <button
                      className="btn btn-success"
                      onClick={() => handleAccept(card.id)}
                    >
                      Accept Job Card
                    </button>
                    <button className="btn btn-danger">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CustomerLayout>
  );
};
