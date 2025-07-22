import { use, useState } from 'react'

import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';

function App() {
  
  return (
  <div>

<Toaster position="top-center" reverseOrder={false} />
 <Routes>
     <Route path="/" element={<LandingPage />} />
     <Route path="/login" element={<Login />} />
 </Routes>
     
  </div>
  
  )
}

export default App
