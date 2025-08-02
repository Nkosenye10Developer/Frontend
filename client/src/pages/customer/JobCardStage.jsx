// import React, { useState, useEffect } from "react";
// import { CustomerLayout } from "../../components/layout/CustomerLayout";

// export const JobCardStage = () => {
//   const [stages, setStages] = useState([]);

//   // Example placeholder for future API call
//   useEffect(() => {
//     // fetchStages(); // Uncomment and define this function when ready
//   }, []);

//   return (
//     <CustomerLayout>
//       <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
//         <h2 className="mb-4">Job Progress</h2>

//         {stages.length === 0 ? (
//           <p className="text-muted">No job stages available.</p>
//         ) : (
//           <ul className="timeline list-unstyled p-4 d-flex flex-row flex-wrap justify-content-center">
//             {stages.map((stage, index) => {
//               const isCompleted = stage.dateCompleted;
//               const isActive = stage.dateTime && !stage.dateCompleted;

//               return (
//                 <li key={index} className="mb-4 d-flex flex-row align-items-start p-3">
//                   <div className="me-3">
//                     <span
//                       className={`badge rounded-pill ${
//                         isCompleted
//                           ? "bg-success"
//                           : isActive
//                           ? "bg-warning text-dark"
//                           : "bg-secondary"
//                       }`}
//                     >
//                       {isCompleted
//                         ? "✓"
//                         : isActive
//                         ? "⏳"
//                         : "○"}
//                     </span>
//                   </div>

//                   <div>
//                     <h5 className="mb-1">{stage.contentType}</h5>
//                     {stage.dateTime && (
//                       <p className="mb-0 text-muted">
//                         Started: {stage.dateTime}
//                       </p>
//                     )}
//                     {stage.dateCompleted ? (
//                       <p className="mb-0 text-success">
//                         Completed: {stage.dateCompleted}
//                       </p>
//                     ) : isActive ? (
//                       <p className="mb-0 text-warning">In Progress…</p>
//                     ) : (
//                       <p className="mb-0 text-muted">Pending</p>
//                     )}
//                   </div>
//                 </li>
//               );
//             })}
//           </ul>
//         )}
//       </div>
//     </CustomerLayout>
//   );
// };


import React from "react";

import { CustomerLayout } from "../../components/layout/CustomerLayout";
import './JobCardStage.css'; // Assuming you have a CSS file for styling

export const JobCardStage = () => {
  const stages = [
    {
      id: 1,
      contentType: "Inspection Started",
      dateTime: "2025-08-01 09:00",
      dateCompleted: "2025-08-01 11:00",
    },
    {
      id: 2,
      contentType: "Parts Ordered",
      dateTime: "2025-08-01 12:00",
      dateCompleted: null,
    },
    {
      id: 3,
      contentType: "Repair in Progress",
      dateTime: null,
      dateCompleted: null,
    },
    {
      id: 4,
      contentType: "Final Testing",
      dateTime: null,
      dateCompleted: null,
    },
    {
      id: 5,
      contentType: "Completed",
      dateTime: null,
      dateCompleted: null,
    },
  ];

  return (
    <CustomerLayout>
      <div className="container-fluid d-flex row align-items-center justify-content-center mt-5 w-100">
        <h2 className="mb-4 text-center">Job Stages</h2>
        <ul className="timeline list-unstyled p-4 d-flex flex-row col-sm-2 col-md-6 col-lg-12">
          {stages.map((stage, index) => {
            const isCompleted = stage.dateCompleted;
            const isActive = stage.dateTime && !stage.dateCompleted;
  
            return (
              <li key={index} className="mb-4 d-flex flex-row align-items-start p-5 container-board">
                <div className=" container-board-inner">
                <div className="me-3">
                  <span
                    className={`badge rounded-pill ${
                      isCompleted
                        ? "bg-success"
                        : isActive
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {isCompleted
                      ? "✓"
                      : isActive
                      ? "⏳"
                      : "○"}
                  </span>
                </div>
  
                <div>
                  <h5 className="mb-1">{stage.contentType}</h5>
                  {stage.dateTime && (
                    <p className="mb-0 text-muted">
                      Started: {stage.dateTime}
                    </p>
                  )}
                  {stage.dateCompleted ? (
                    <p className="mb-0 text-success">
                      Completed: {stage.dateCompleted}
                    </p>
                  ) : isActive ? (
                    <p className="mb-0 text-warning">In Progress…</p>
                  ) : (
                    <p className="mb-0 text-muted">Pending</p>
                  )}
                </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </CustomerLayout>
  );
  
};

