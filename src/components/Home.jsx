import React, { useState, useEffect } from 'react'
import { client } from '../services/client'
import { getAllTodos } from '../services/utils'
import TodoCard from './TodoCard';
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  function handleDelete(id) {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    });
  }
  useEffect(() => {
    async function fetchTodos() {
      const { data, error } = await getAllTodos();

      if (error) {
        setError('An error has occurred while fetching the todos. See console.')
        setTodos(null);
        console.error(error.message);
      }

      setTodos(data);
    }
    fetchTodos()
  }, [])

  console.log(client);
  return (
    <div className='page'>
      {error && (
        <div className='error-card'>
          <div className='error'>
          {error}
          </div>
        </div>
      )}
      {todos && (
      todos.map((todo) => (
        <div key={todo.id}>
          <div>
            <TodoCard
              todo={todo}
              onDelete={handleDelete}
            />
          </div>
        </div>
      ))
    )}</div>
  )
}
