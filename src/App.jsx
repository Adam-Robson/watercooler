import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';

export default function App() {
  return (
    <>
      <h1 className="title">Todos List</h1>
      <Routes>
        <Route path='/' element={ <Home /> } />
      </Routes>      
    </>
  );
}
