import { useState, useEffect } from 'react';

import { getTodos, getTodoById } from '../services/utils.js';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTodos();
        return setTodos(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);
  return { todos, setTodos, error, setError };
}

export function useTodoById(id) {
  const [todoDetail, setTodoDetail] = useState({});
  const [error, setError] = useState('');
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getTodoById(id);
        return setTodoDetail(data);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, [id]);
  return { todoDetail, setTodoDetail, error, setError };
}
