import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import Footer from '../components/Footer'




function LandingPage (){
    return(

        <div>
 <Navbar/>
 <Body/>
 <Footer/>
        </div>
    )
}
export default LandingPage; 