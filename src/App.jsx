import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Header from './components/Header';
import Auth from './components/Auth';
import Home from './components/Home';
import CreateTodo from './components/CreateTodo';
import Todo from './components/Todo';
import Error from './components/Error';

import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Navigation />

      <Routes>
        <Route path='/auth/:type' element={ <Auth /> } />
        <Route path='/create' element={ <CreateTodo /> } />
        <Route path='/todo' element={ <Todo /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <Error /> } />
      </Routes>      
    </>
  );
}

function Navigation() {
  return (
    <nav>
      <NavLink to='/'>home</NavLink>
      <NavLink to='dashboard'>dashboard</NavLink>
    </nav>
  );
}