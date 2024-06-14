import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Pages/Navbar'; // Importa tu componente Navbar aquí
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Coloca tu componente Navbar aquí */}
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
