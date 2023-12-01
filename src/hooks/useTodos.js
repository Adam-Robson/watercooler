import React, { useState, useEffect } from 'react';
import { getAllTodos } from '../services/utils'

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      const { data, error } = await getAllTodos();

      if (error) {
        setLoading(true)
        setError('An error has occurred while fetching the todos. See console.')
        setTodos(null);
        console.error(error.message);
        setLoading(false);
      }
      setTodos(data);
    }
    fetchTodos()
  }, [])
  return ({
    todos, setTodos, error, setError, loading, setLoading
  });
}
