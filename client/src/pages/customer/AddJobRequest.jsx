import React from "react";
import { CustomerLayout } from '../../components/layout/CustomerLayout';
import { Link, useNavigate } from 'react-router-dom';





export const AddJobRequest = () => {
  return (
    <CustomerLayout>
   
   <section className="home">
   <div class="col-6 col-md-12 w-100">
    <h1 class="text-nowrap fw-bold"> <span className="text-muted">Vehicles</span> <i class='bx  bx-chevron-right'  ></i>   Add Vehicles</h1>
    </div>
   </section>


   <div className="w-100">
<form action="">
   <div className="w-">
     <label for="" className="font-name">Name:</label>
     <input type="text" name="" id="" className="form-control pharm_in" />
    </div>  
    <div className="w-100">
     <label for="" className="font-name">Registration:</label>
     <input type="text" name="" id="" className="form-control pharm_in" />
    </div>   
    <div className="w-100">
     <label for="" className="font-name">Mileage:</label>
     <input type="text" name="" id="" className="form-control pharm_in" />
    </div> 
    <div className="w-100">
     <label for="" className="font-name">Make:</label>
     <input type="text" name="" id="" className="form-control pharm_in" />
    </div> 


    <div  className="d-flex flex-row mt-5">
                <div className="me-2 h-100">
                   <button type="submit" className="btn btn-primary w-100">Add Vehicles</button>
                </div>
                <div >
                    <Link to='/jobrequest' className="btn btn-danger w-100">Back</Link>
                </div>
    </div>
        </form>
            
    </div>
    </CustomerLayout>
  );
};