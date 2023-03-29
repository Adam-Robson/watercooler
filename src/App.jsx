import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Todo from './components/Todo';

import './App.css';

export default function App() {
  const [currentTodo, setCurrentTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

 

  return (
    <>
      <h1 className="title">Todos List</h1>
      <Routes>
        <Route path='/' element={
          <Todo
            todoList={ todoList }
            setTodoList={ setTodoList }
            currentTodo={ currentTodo }
            setCurrentTodo={ setCurrentTodo }
          /> } />
      </Routes>      
    </>
  );
}
