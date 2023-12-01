import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <h1 className="title">Todos List</h1>
          <Link to='/'>Home</Link>
          <Link to='/create'>Create</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/update/:id' element={<Update />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
