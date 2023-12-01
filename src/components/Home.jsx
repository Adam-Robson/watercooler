import React from 'react'
import { useTodos } from '../hooks/useTodos'
import TodoCard from './TodoCard';

export default function Home() {
  function handleDelete(id) {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== id)
    });
  }

  const { todos, setTodos, error, setError, loading, setLoading } = useTodos();

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
