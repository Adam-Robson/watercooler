import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './context/UserContext';

import Todo from './Todo';

export default function Home() {
  const [currentTodo, setCurrentTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
    
  const { user } = useUserContext();

  const navigate = useNavigate();

  if (!user) {
    navigate('/auth/sign-in');
  }

  return (
    <>
      <section>
        <Todo
          todoList={ todoList }
          setTodoList={ setTodoList }
          currentTodo={ currentTodo }
          setCurrentTodo={ setCurrentTodo }
        /> 
      </section>
    </>
  );
}
