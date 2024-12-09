import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Animal from '../indiAnimal/animal';
import ShowPage from './Display/ShowPage';
import Home from './HomePage/Home';

export default function Routers() {
    return (
        <Routes>
           
            <Route path="/" element={<Navigate to="/adoptly" />} />

         
            <Route path="/adoptly" element={<Home />} />

     
            <Route path="/adoptly/:category" element={<ShowPage />} />

          
            <Route path="/adoptly/:category/:id" element={<Animal />} />
        </Routes>
    );
}
