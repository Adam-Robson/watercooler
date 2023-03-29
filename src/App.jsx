import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Todo from './components/Todo';

import './App.css';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Todo /> } />
      </Routes>      
    </>
  );
}
