import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Animal from '../indiAnimal/animal';
import About from './AboutPage/About';
import ShowPage from './Display/ShowPage';
import Home from './HomePage/Home';
import Payment from './PaymentPage/Payment';
export default function Routers() {
    return (
        <Routes>
           
            <Route path="/" element={<Navigate to="/adoptly" />} />

         
            <Route path="/adoptly" element={<Home />} />

            <Route path="/about" element={<About />} />

     
            <Route path="/adoptly/:category" element={<ShowPage />} />

          
            <Route path="/adoptly/:category/:id" element={<Animal />} />

            <Route path="/adoptly/:category/:id/Payment" element={<Payment/>} />

        </Routes>
    );
}
