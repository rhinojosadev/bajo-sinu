import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,  Routes, Route } from "react-router-dom";

import { Home, Calendario, Estadistica, Grafica } from './pages/index.js';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/calendario" element={<Calendario/>} />
        <Route path="/estadistica" element={<Estadistica/>} />
        <Route path="/grafica" element={<Grafica/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);